import { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import AnimatedButton from '../../components/AnimatedButton/AnimatedButton';

import { styles } from './styles';
import { styles as globalStyles } from '../../global/styles';
import { storage } from '../../helpers/storage';
import { requestServer } from '../../api/requestServer';

export default function FormEnter({ navigation, ...props }) {
    const textInputRef = useRef(null);
    const [text, setText] = useState("");

    const pageData = props.route.params.pageData;

    async function checkCode() {
        return await requestServer({
            method: "POST",
            endpoint: 'auth',
            data: {
                team: JSON.parse(await storage.getItem("team")),
                code: JSON.parse(text),
            }
        });
    }

    async function continueForm() {
        
        if(`${pageData.title}` === "What's Your Name") {

            if(text.length > 0) {
                storage.createItem("name", text);
                navigation.navigate("formenter", {
                    pageData: {
                        title: "What's Your Team",
                        placeholder: "Enter your team number",
                        keyboardType: "number-pad",
                    }
                });
                setText("");
            } else {
                showMessage({
                    message: "Error: Name is required",
                    backgroundColor: "#9a1212",
                    color: "white",
                });
            }

        } else if(`${pageData.title}` === "What's Your Team") {

            if(text.length == 4) {
                storage.createItem("team", text);
                navigation.navigate("formenter", {
                    pageData: {
                        title: "What's Your Team Code",
                        placeholder: "Enter your team access code",
                        keyboardType: "number-pad",
                    }
                });
                setText("");
            } else {
                showMessage({
                    message: "Error: Team is required",
                    backgroundColor: "#9a1212",
                    color: "white",
                });
            }
        } else if(`${pageData.title}` === "What's Your Team Code") {

            if(text.length == 6) {
                
                const resData = await checkCode();

                if(resData.code == 200) {
                    storage.createItem("authenticated", "true");
                    storage.createItem("teamCode", text);
                    navigation.navigate("listmatches", {
                        title: "listevents"
                    });
                } else {
                    showMessage({
                        message: "Error: Team code is incorrect",
                        backgroundColor: "#9a1212",
                        color: "white",
                    });
                }
            } else {
                showMessage({
                    message: "Error: 6 digit code required",
                    backgroundColor: "#9a1212",
                    color: "white",
                });
            }
        }
    }

    function setTextFunc(text) {

        if(`${pageData.title}` === "What's Your Name") {
            setText(text.split(" ")
                .map(
                    (part) =>
                        part.charAt(0).toUpperCase() + part.slice(1)
                )
                .join(" ")
            );
        } else if(`${pageData.title}` === "What's Your Team") {
            if(text.length > 4) {
                showMessage({
                    message: "Error: Teams are 4 digits",
                    backgroundColor: "#9a1212",
                    color: "white",
                });
            } else {
                setText(text);
            }
        } else if(`${pageData.title}` === "What's Your Team Code") {
            if(text.length > 6) {
                showMessage({
                    message: "Error: Team codes are 6 digits",
                    backgroundColor: "#9a1212",
                    color: "white",
                });
            } else {
                setText(text);
            }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => textInputRef.current.blur()}>
            <View style={[globalStyles.containerVertical, {alignItems: "center"}]}>
                <View style={styles.adjustTitle}>
                    <Text style={globalStyles.largeIntroText}>7407</Text>
                </View>
                <View style={styles.adjustTextInput}>
                    <Text style={styles.title}>{pageData.title}</Text>
                    <TextInput 
                        ref={textInputRef}
                        style={styles.keyboardInput}
                        placeholder={pageData.placeholder}
                        keyboardType={pageData.keyboardType}
                        autoComplete={pageData.autoComplete}
                        value={text}
                        onChangeText={(text) => setTextFunc(text)}
                    />        
                </View>
                <View style={styles.alignButton}>
                    <AnimatedButton style={globalStyles.animatedBtnStyle} onPress={continueForm}>
                        <View style={globalStyles.centerBtnText}>
                            <Text style={globalStyles.startBtnText}>Continue</Text>
                        </View>
                    </AnimatedButton>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}