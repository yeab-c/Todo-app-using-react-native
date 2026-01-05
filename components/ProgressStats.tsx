import { createSettingsStyles } from '@/assets/styles/settings.style';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const ProgressStats = () => {
    const {colors} = useTheme();
    const settingsStyles = createSettingsStyles(colors);

    const todos = useQuery(api.todos.getTodos);
    const totalTodos = todos ? todos.length : 0;
    const completedTodos = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
    const activeTodos = totalTodos - completedTodos;

  return (
    <LinearGradient colors={colors.gradient.surface} style={settingsStyles.section}>
        <Text style={settingsStyles.sectionTitle}>Progress Stats</Text>
        
        <View style={settingsStyles.statsContainer}>
            <LinearGradient colors={colors.gradient.background} style={[settingsStyles.statCard, { borderLeftColor: colors.primary}]}>
                <View style={settingsStyles.statIconContainer}>
                    <LinearGradient colors={colors.gradient.primary} style={settingsStyles.statIcon}>
                        <Ionicons name="list" size={20} color="#ffffff" />
                    </LinearGradient>
                </View>

                <View>
                    <Text style={settingsStyles.statNumber}>{totalTodos}</Text>
                    <Text style={settingsStyles.statLabel}>Total Todos</Text>
                </View>
            </LinearGradient>

            <LinearGradient colors={colors.gradient.background} style={[settingsStyles.statCard, { borderLeftColor: colors.success}]}>
                <View style={settingsStyles.statIconContainer}>
                    <LinearGradient colors={colors.gradient.success} style={settingsStyles.statIcon}>
                        <Ionicons name="checkmark" size={20} color="#ffffff" />
                    </LinearGradient>
                </View>

                <View>
                    <Text style={settingsStyles.statNumber}>{completedTodos}</Text>
                    <Text style={settingsStyles.statLabel}>Completed</Text>
                </View>
            </LinearGradient>

            <LinearGradient colors={colors.gradient.background} style={[settingsStyles.statCard, { borderLeftColor: colors.warning}]}>
                <View style={settingsStyles.statIconContainer}>
                    <LinearGradient colors={colors.gradient.warning} style={settingsStyles.statIcon}>
                        <Ionicons name="time" size={20} color="#ffffff" />
                    </LinearGradient>
                </View>

                <View>
                    <Text style={settingsStyles.statNumber}>{activeTodos}</Text>
                    <Text style={settingsStyles.statLabel}>Active</Text>
                </View>
            </LinearGradient>
        </View>
    </LinearGradient>
  )
}

export default ProgressStats