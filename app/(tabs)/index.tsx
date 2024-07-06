import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native';
import { useForm } from 'react-hook-form';
import  YouTubeForm from '../../components/YoutubeForm';

const HomeScreen: React.FC = () => {
    const onSubmitYouTubeForm = (data: { URL: string }) => {
        console.log(data);
        // Future API call to process the URL can be made here
    };

    return (
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Welcome to Video2Recipe</ThemedText>
            </ThemedView>
            <YouTubeForm onSubmit={onSubmitYouTubeForm} />
         
        </ParallaxScrollView>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
});

export default HomeScreen;
