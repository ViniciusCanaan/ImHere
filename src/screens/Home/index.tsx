import React, {useState} from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert   } from "react-native";
import { styles } from './styles';

import { Participant } from "../../components/Participant";
export default function Home() {
  const [participants, setPaticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
     return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome")
    }
    setPaticipants(prevState => [...prevState,participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name} ?`, [
      {
        text:'Sim',
        onPress: () => Alert.alert("Deletado"),
      },
      {
        text:'Não',
        style:'cancel'
      }
    ])  
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React Native
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6B6B6B"
          onChangeText={text => setParticipantName(text)}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>Ninguém chegou no evento ainda? Adicione participantes na sua lista de presença</Text>
        )}
      />
           
    </View>
  );
}
