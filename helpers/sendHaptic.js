import * as Haptics from 'expo-haptics';

export const sendHaptic = {
    impactLight: function() {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    },
    impactMedium: function() {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    },
    impactHeavy: function() {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    },
    notificationSuccess: function() {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    },
    notificationWarning: function() {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    },
    notificationError: function() {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    },
}