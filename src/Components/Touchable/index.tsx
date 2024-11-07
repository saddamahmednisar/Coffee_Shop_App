import React from 'react';
import { DimensionValue, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../Constant/Colors';
import Fonts from '../../Constant/Fonts';

interface TouchableProps {
    title: string;
    height?: DimensionValue; 
    width?: DimensionValue; 
    fontSize?: number;
    borderRadius?: number;
    onPress?:()=>void
}

const Touchable: React.FC<TouchableProps> = ({
    title,
    height = 48, 
    width = "88%",   
    fontSize = 12,
    borderRadius = 24,
    onPress
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, { height, width, borderRadius }]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { fontSize }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: Fonts.Regular,
        color: Colors.White,
    },
});

export default Touchable;
