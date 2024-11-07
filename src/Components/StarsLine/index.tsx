import React from 'react';
import { StyleSheet, View } from 'react-native';
import StarsComponent from 'react-native-stars';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const Stars = ({ defaultRating =5 }) => {
    return (
        <View style={styles.starContainer}>
            <StarsComponent
                default={defaultRating}
                count={5}
                disabled={true}
                starSize={20} 
                fullStar={<Icon2 name={'star'} style={[styles.myStarStyle, { fontSize: 15 }]} />}
                emptyStar={<Icon2 name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle, { fontSize: 15 }]} />}
                halfStar={<Icon2 name={'star-half'} style={[styles.myStarStyle, { fontSize: 15 }]} />}
            />
        </View>
    );
};

export default Stars;

const styles = StyleSheet.create({
    starContainer: {
        marginTop: 3,
    },

    myStarStyle: {
        color: '#E9B868',
        backgroundColor: 'transparent',
    },
    myEmptyStarStyle: {
        color: '#DDDDDD',
    },
});
