// import * as React from 'react';
import { useState } from "react";
import { View } from "react-native";

import { List } from "react-native-paper";

const ListComponent = ({ items, title, onPress, selectedValue ,titleList}) => {
  const [expanded, setExpanded] = useState(false);
 

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={{ width: "50%" }}>
      <List.Section title={title}>
        <List.Accordion
          title={selectedValue ? selectedValue : titleList}
     
          expanded={expanded}
          onPress={handlePress}
        >
              
          {items.map((item, index) => (
         
            <List.Item
              key={index}
              title={item }
              onPress={() => {
                onPress(item);
                setExpanded(false);
              }}
           
              />
            
         
          ))}
        </List.Accordion>
      </List.Section>
    </View>
  );
};

export default ListComponent;
