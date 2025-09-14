import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Alert,
  Platform,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { dashboardStyles as styles } from '../styles/dashboardStyles';

export default function DashboardScreen() {
  const { width: screenWidth } = useWindowDimensions();
  const isDesktop = screenWidth >= 768;

  // Date picker state
  const [startDate, setStartDate] = useState(new Date(2025, 2, 20)); // Mar 20, 2025
  const [endDate, setEndDate] = useState(new Date(2025, 2, 26));     // Mar 26, 2025
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isSelectingStartDate, setIsSelectingStartDate] = useState(true);

  // Format date range for display
  const formatDateRange = (start: Date, end: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    const year = start.getFullYear();
    return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}, ${year}`;
  };

  // Show / hide date picker
  const showDatePicker = () => {
    setIsSelectingStartDate(true);
    setIsDatePickerVisible(true);
  };
  const hideDatePicker = () => setIsDatePickerVisible(false);

  // Handle date confirm
  const handleDateConfirm = (date: Date) => {
    if (isSelectingStartDate) {
      setStartDate(date);
      setIsSelectingStartDate(false);
    } else {
      setEndDate(date < startDate ? startDate : date);
      hideDatePicker();
    }
  };

  // Chart width
  const chartWidth = isDesktop
    ? (screenWidth - 120) / 2 - 40 // Desktop two-column
    : screenWidth - 80;            // Mobile full-width

  // Mock chart data
  const chartData = {
    labels: ['Mar 20', 'Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25', 'Mar 26'],
    datasets: [
      {
        data: [0, 0, 200, 0, 0, 500, 1100],
        color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#FFFFFF',
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(153, 153, 153, ${opacity})`,
    propsForDots: {
      r: '4',
      strokeWidth: '2',
      stroke: '#007AFF',
    },
    propsForBackgroundLines: {
      strokeDasharray: '',
      stroke: '#E5E5EA',
      strokeWidth: 1,
    },
    propsForLabels: {
      fontSize: 12,
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>
          <Text style={styles.storeName}>Shopify Store</Text>
          <TouchableOpacity onPress={() => Alert.alert('Notifications', 'Open notifications panel')}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#8E8E93"
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#8E8E93" />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor="#8E8E93"
            onSubmitEditing={() => Alert.alert('Search', 'Perform search action')}
          />
        </View>

        {/* Date + Report */}
        <View style={styles.dateReportRow}>
          <TouchableOpacity style={styles.datePicker} onPress={showDatePicker}>
            <Text style={styles.datePickerText}>{formatDateRange(startDate, endDate)}</Text>
            <Ionicons name="chevron-down" size={16} color="#8E8E93" style={styles.chevronIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reportBtn}
            onPress={() => Alert.alert('Reports', 'Navigate to Reports page')}
          >
            <MaterialIcons name="insert-chart-outlined" size={16} color="#007AFF" />
            <Text style={styles.reportBtnText}>Report</Text>
          </TouchableOpacity>
        </View>

        {/* Dashboard Cards */}
        <View style={isDesktop ? styles.cardContainerDesktop : styles.cardContainerMobile}>
          
          {/* Live View */}
          <View style={[styles.liveCard, isDesktop && styles.desktopCard]}>
            <Text style={styles.liveText}>• Live View</Text>

            <View style={styles.metricsRow}>
              <View style={styles.metricColumn}>
                <Text style={styles.metricLabel}>Total sales</Text>
                <Text style={[styles.metricValue, isDesktop && styles.metricValueDesktop]}>$1100</Text>
              </View>
              <View style={styles.metricColumn}>
                <Text style={styles.metricLabel}>Total orders</Text>
                <Text style={[styles.metricValue, isDesktop && styles.metricValueDesktop]}>24</Text>
              </View>
              <View style={styles.metricColumn}>
                <Text style={styles.metricLabel}>Conversion</Text>
                <Text style={[styles.metricValue, isDesktop && styles.metricValueDesktop]}>0.97%</Text>
              </View>
            </View>

            <View style={styles.chartContainer}>
              <LineChart
                data={chartData}
                width={chartWidth}
                height={160}
                chartConfig={chartConfig}
                bezier
                style={styles.chart}
                withDots
                withShadow={false}
                withInnerLines={false}
                withOuterLines={false}
                withVerticalLines={false}
                withHorizontalLines
              />
            </View>
          </View>

          {/* Checklist */}
          <View style={[styles.checklistCard, isDesktop && styles.desktopCard]}>
            <View style={styles.checklistHeader}>
              <Text style={styles.checklistTitle}>Get ready to sell</Text>
              <View style={styles.checklistHeaderIcons}>
                <TouchableOpacity onPress={() => Alert.alert('Expand/Collapse', 'Toggle checklist')}>
                  <Ionicons name="chevron-up" size={18} color="#8E8E93" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('More Options', 'Open menu')}>
                  <Ionicons
                    name="ellipsis-vertical"
                    size={18}
                    color="#8E8E93"
                    style={styles.ellipsisIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.checklistSubtitle}>
              Use this guide to get your store up and running.
            </Text>
            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>3 / 5 completed</Text>
            </View>

            <TouchableOpacity
              style={styles.taskItem}
              onPress={() => Alert.alert('Task', 'Open store design wizard')}
            >
              <Ionicons name="ellipse-outline" size={16} color="#8E8E93" />
              <Text style={styles.taskText}>Design your online store in seconds</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.taskItem}
              onPress={() => Alert.alert('Task', 'Open domain settings')}
            >
              <Ionicons name="checkmark-circle" size={16} color="#34C759" />
              <Text style={styles.taskText}>Add a custom domain</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Date Picker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        date={isSelectingStartDate ? startDate : endDate}
        minimumDate={new Date(2020, 0, 1)}
        maximumDate={new Date(2030, 11, 31)}
        display={Platform.OS === 'ios' ? 'inline' : 'default'}
        textColor="#1D1D1F"
        accentColor="#007AFF"
        themeVariant="light"
      />
    </SafeAreaView>
  );
}
