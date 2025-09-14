import { Ionicons } from '@expo/vector-icons';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function CustomersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Customers</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#8E8E93" />
          <TextInput
            placeholder="Search customers..."
            style={styles.searchInput}
            placeholderTextColor="#8E8E93"
          />
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Total Customers</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>New This Month</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>$2,340</Text>
            <Text style={styles.statLabel}>Avg. Order Value</Text>
          </View>
        </View>

        {/* Customer Segments */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Customer Segments</Text>
          
          <View style={styles.segmentCard}>
            <View style={styles.segmentIcon}>
              <Ionicons name="star" size={20} color="#FF9500" />
            </View>
            <View style={styles.segmentInfo}>
              <Text style={styles.segmentName}>VIP Customers</Text>
              <Text style={styles.segmentCount}>12 customers</Text>
            </View>
            <Text style={styles.segmentValue}>$4,560</Text>
          </View>

          <View style={styles.segmentCard}>
            <View style={styles.segmentIcon}>
              <Ionicons name="trending-up" size={20} color="#34C759" />
            </View>
            <View style={styles.segmentInfo}>
              <Text style={styles.segmentName}>Frequent Buyers</Text>
              <Text style={styles.segmentCount}>45 customers</Text>
            </View>
            <Text style={styles.segmentValue}>$2,890</Text>
          </View>

          <View style={styles.segmentCard}>
            <View style={styles.segmentIcon}>
              <Ionicons name="person-add" size={20} color="#007AFF" />
            </View>
            <View style={styles.segmentInfo}>
              <Text style={styles.segmentName}>New Customers</Text>
              <Text style={styles.segmentCount}>23 customers</Text>
            </View>
            <Text style={styles.segmentValue}>$1,230</Text>
          </View>
        </View>

        {/* Recent Customers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Customers</Text>
          
          <View style={styles.customerCard}>
            <View style={styles.customerAvatar}>
              <Text style={styles.avatarText}>JD</Text>
            </View>
            <View style={styles.customerInfo}>
              <Text style={styles.customerName}>John Doe</Text>
              <Text style={styles.customerEmail}>john.doe@email.com</Text>
              <Text style={styles.customerLocation}>New York, NY</Text>
            </View>
            <View style={styles.customerStats}>
              <Text style={styles.orderCount}>5 orders</Text>
              <Text style={styles.totalSpent}>$456.00</Text>
            </View>
          </View>

          <View style={styles.customerCard}>
            <View style={styles.customerAvatar}>
              <Text style={styles.avatarText}>JS</Text>
            </View>
            <View style={styles.customerInfo}>
              <Text style={styles.customerName}>Jane Smith</Text>
              <Text style={styles.customerEmail}>jane.smith@email.com</Text>
              <Text style={styles.customerLocation}>Los Angeles, CA</Text>
            </View>
            <View style={styles.customerStats}>
              <Text style={styles.orderCount}>3 orders</Text>
              <Text style={styles.totalSpent}>$234.50</Text>
            </View>
          </View>

          <View style={styles.customerCard}>
            <View style={styles.customerAvatar}>
              <Text style={styles.avatarText}>MJ</Text>
            </View>
            <View style={styles.customerInfo}>
              <Text style={styles.customerName}>Mike Johnson</Text>
              <Text style={styles.customerEmail}>mike.j@email.com</Text>
              <Text style={styles.customerLocation}>Chicago, IL</Text>
            </View>
            <View style={styles.customerStats}>
              <Text style={styles.orderCount}>8 orders</Text>
              <Text style={styles.totalSpent}>$789.99</Text>
            </View>
          </View>

          <View style={styles.customerCard}>
            <View style={styles.customerAvatar}>
              <Text style={styles.avatarText}>SW</Text>
            </View>
            <View style={styles.customerInfo}>
              <Text style={styles.customerName}>Sarah Wilson</Text>
              <Text style={styles.customerEmail}>sarah.w@email.com</Text>
              <Text style={styles.customerLocation}>Miami, FL</Text>
            </View>
            <View style={styles.customerStats}>
              <Text style={styles.orderCount}>2 orders</Text>
              <Text style={styles.totalSpent}>$123.00</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1D1D1F',
  },
  addButton: {
    backgroundColor: '#007AFF',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1D1D1F',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1D1D1F',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#8E8E93',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1D1D1F',
    marginBottom: 16,
  },
  segmentCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  segmentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  segmentInfo: {
    flex: 1,
  },
  segmentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D1D1F',
    marginBottom: 4,
  },
  segmentCount: {
    fontSize: 12,
    color: '#8E8E93',
  },
  segmentValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D1D1F',
  },
  customerCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  customerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  customerInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D1D1F',
    marginBottom: 4,
  },
  customerEmail: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 2,
  },
  customerLocation: {
    fontSize: 12,
    color: '#8E8E93',
  },
  customerStats: {
    alignItems: 'flex-end',
  },
  orderCount: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
  },
  totalSpent: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D1D1F',
  },
});
