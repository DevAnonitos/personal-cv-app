import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const SwitchThemes = () => {
  return (
    <TouchableOpacity>
      <Ionicons name="sunny" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default SwitchThemes;