import { View, Text } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { styles } from './styles';
import { styles as globalStyles } from '../../global/styles';

export default function Header(props) {
    return (
        <View style={styles.headerContainer}>
            <View style={globalStyles.row}>
                <Text style={[styles.letter, {color: "#FFEA00"}]}>7</Text>
                <Text style={[styles.letter, {color: "#fff"}]}>4</Text>
                <Text style={[styles.letter, {color: "#FFEA00"}]}>0</Text>
                <Text style={[styles.letter, {color: "#fff"}]}>7</Text>
            </View>
            <View style={[globalStyles.line, {backgroundColor: "#FFEA00", marginBottom: hp(0.5)}]}/>
            <View style={[globalStyles.line, { backgroundColor: "#fff"}]}/>
        </View>
    )
}

