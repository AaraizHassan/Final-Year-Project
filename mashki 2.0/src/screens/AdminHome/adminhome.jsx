// AdminHome.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AdminHome = () => {
  const navigation = useNavigation();

  const pricePageLink = () => {
    navigation.navigate('AdminPrice');
  };
  const zoneManageLink = () => {
    navigation.navigate('AdminZoneManagement');
  };
  const inflowOutflowLink = () => {
    navigation.navigate('AdminInflows');
  };
  const addWaterPlantLink = () => {
    navigation.navigate('AdminAddPlant');
  };
  const addLabLink = () => {
    navigation.navigate('AdminAddLaboratory');
  };
  const sendTestingInfoLink = () => {
    navigation.navigate('SendTestingInfo');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Admin Screen</Text>
      <Button title="Price change" onPress={pricePageLink} />
      <Button title="View inflows and outflows" onPress={inflowOutflowLink} />
      <Button title="Add Water Plant" onPress={addWaterPlantLink} />
      <Button title="Add Laboratory" onPress={addLabLink} />
      <Button title="Zone Adjustments" onPress={zoneManageLink} />
      <Button title="Send Testing Information to Lab" onPress={sendTestingInfoLink} />
    </View>
  );
};

export default AdminHome;
