import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { View, Button, TextInput, Text, StyleSheet } from 'react-native';

interface FormValues {
    URL: string;
}

interface YouTubeFormProps {
    onSubmit: SubmitHandler<FormValues>;
}

const YouTubeForm: React.FC<YouTubeFormProps> = ({ onSubmit }) => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            URL: '' // Ensure the initial value is set to avoid uncontrolled to controlled transition
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter your YouTube Video Link:</Text>
            <Controller
                control={control}
                rules={{
                    required: "URL is required",
                    maxLength: { value: 300, message: "URL cannot exceed 300 characters" },
                    pattern: {
                        value: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/i,
                        message: "Please enter a valid YouTube URL"
                    }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[styles.input, errors.URL && styles.errorInput]}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Enter URL here"
                    />
                )}
                name="URL"
            />
            {errors.URL && <Text style={styles.errorText}>{errors.URL.message}</Text>}
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2, // for Android
    },
    label: {
        marginBottom: 10,
        fontSize: 16,
        color: '#333',
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    errorInput: {
        borderColor: '#ff0000', // Red border for error
    },
    errorText: {
        color: '#ff0000', // Red text for error
        marginBottom: 10,
    },
});

export default YouTubeForm;
