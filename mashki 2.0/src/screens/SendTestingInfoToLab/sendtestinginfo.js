import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const SendTestingInfo = () => {
  const [companyName, setCompanyName] = useState('');
  const [plantName, setPlantName] = useState('');
  const [testingDate, setTestingDate] = useState('');
  const [testingStage, setSelected] = React.useState("");

  // saves testing info in the database
  const handleSubmit = async () => {
    try {
      console.log('Submitting testing information:', { companyName, plantName, testingStage, testingDate });

      const formattedDate = new Date(testingDate);

      const response = await fetch('http://192.168.100.10:5000/submit-testing-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName,
          plantName,
          testingStage,
          testingDate: formattedDate.toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit testing information');
      }

      console.log('Testing information submitted successfully');
    } catch (error) {
      console.error('Error submitting testing information:', error);
    }
  };
  const data=[
    { key: '1', value: 'Select Testing Stage', disabled: true },
    { key: '2', value: 'While Delivering' },
    { key: '3', value: 'In Plant' },
    { key: '4', value: 'Once Delivered' },
  ]

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Enter Testing Information</Text>
      <TextInput
        placeholder="Company Name"
        value={companyName}
        onChangeText={text => setCompanyName(text)}
      />
      <TextInput
        placeholder="Plant Name"
        value={plantName}
        onChangeText={text => setPlantName(text)}
      />
      <TextInput
        placeholder="Testing Date (yyyy-mm-dd)"
        value={testingDate}
        onChangeText={text => setTestingDate(text)}
      />
      <Text>Testing Stage:</Text>
      <SelectList
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
/>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default SendTestingInfo;
