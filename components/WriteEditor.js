import React, { useRef } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

function WriteEditor({ title, body, onChangeTitle, onChangeBody }) {
  const bodyRef = useRef();

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />
      <TextInput
        placeholder="당신의 오늘을 기록해보세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    fontSize: 18,
    marginBottom: 16,
    color: '#263228',
    fontWeight: 'bold',
    paddingVertical: 0,
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263228',
  },
});

export default WriteEditor;