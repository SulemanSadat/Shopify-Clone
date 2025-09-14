import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type OrderStatus = 'All' | 'Unfulfilled' | 'Fulfilled' | 'Refunded';

interface Order {
  id: string;
  customerName: string;
  date: string;
  total: string;
  status: 'Unfulfilled' | 'Fulfilled' | 'Refunded';
}

const mockOrders: Order[] = [
  {
    id: '#1001',
    customerName: 'Alice Smith',
    date: 'Sep 12, 2025',
    total: '$120.00',
    status: 'Unfulfilled'
  },
  {
    id: '#1000',
    customerName: 'Bob Johnson',
    date: 'Sep 11, 2025',
    total: '$89.50',
    status: 'Fulfilled'
  },
  {
    id: '#999',
    customerName: 'Carol Davis',
    date: 'Sep 10, 2025',
    total: '$245.75',
    status: 'Fulfilled'
  },
  {
    id: '#998',
    customerName: 'David Wilson',
    date: 'Sep 9, 2025',
    total: '$67.25',
    status: 'Unfulfilled'
  },
  {
    id: '#997',
    customerName: 'Emma Brown',
    date: 'Sep 8, 2025',
    total: '$156.00',
    status: 'Refunded'
  },
  {
    id: '#996',
    customerName: 'Frank Miller',
    date: 'Sep 7, 2025',
    total: '$78.90',
    status: 'Fulfilled'
  },
  {
    id: '#995',
    customerName: 'Grace Lee',
    date: 'Sep 6, 2025',
    total: '$203.40',
    status: 'Unfulfilled'
  },
  {
    id: '#994',
    customerName: 'Henry Taylor',
    date: 'Sep 5, 2025',
    total: '$134.60',
    status: 'Fulfilled'
  }
];

export default function OrdersScreen() {
  const [activeFilter, setActiveFilter] = useState<OrderStatus>('All');

  const filteredOrders = activeFilter === 'All' 
    ? mockOrders 
    : mockOrders.filter(order => order.status === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Fulfilled':
        return '#34C759';
      case 'Unfulfilled':
        return '#FF9500';
      case 'Refunded':
        return '#FF3B30';
      default:
        return '#8E8E93';
    }
  };

  const getStatusBackground = (status: string) => {
    switch (status) {
      case 'Fulfilled':
        return '#E8F5E8';
      case 'Unfulfilled':
        return '#FFF4E6';
      case 'Refunded':
        return '#FFE5E5';
      default:
        return '#F2F2F7';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Orders</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter-outline" size={20} color="#007AFF" />
          </TouchableOpacity>
        </View>

        {/* Filter Tabs */}
        <View style={styles.filterContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterTabs}>
            {(['All', 'Unfulfilled', 'Fulfilled', 'Refunded'] as OrderStatus[]).map((filter) => (
              <TouchableOpacity
                key={filter}
                style={[
                  styles.filterTab,
                  activeFilter === filter && styles.activeFilterTab
                ]}
                onPress={() => setActiveFilter(filter)}
              >
                <Text style={[
                  styles.filterTabText,
                  activeFilter === filter && styles.activeFilterTabText
                ]}>
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Orders List */}
        <View style={styles.ordersContainer}>
          {filteredOrders.map((order) => (
            <TouchableOpacity key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <Text style={styles.orderId}>{order.id}</Text>
                <View style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusBackground(order.status) }
                ]}>
                  <Text style={[
                    styles.statusText,
                    { color: getStatusColor(order.status) }
                  ]}>
                    {order.status}
                  </Text>
                </View>
              </View>
              
              <View style={styles.orderContent}>
                <View style={styles.orderInfo}>
                  <Text style={styles.customerName}>{order.customerName}</Text>
                  <Text style={styles.orderDate}>{order.date}</Text>
                </View>
                <Text style={styles.orderTotal}>{order.total}</Text>
              </View>
            </TouchableOpacity>
          ))}
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
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1D1D1F',
  },
  filterButton: {
    padding: 8,
  },
  filterContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  filterTabs: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 8,
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
  },
  activeFilterTab: {
    backgroundColor: '#007AFF',
  },
  filterTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8E8E93',
  },
  activeFilterTabText: {
    color: '#FFFFFF',
  },
  ordersContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D1D1F',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  orderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  orderInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1D1D1F',
    marginBottom: 4,
  },
  orderDate: {
    fontSize: 13,
    color: '#8E8E93',
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D1D1F',
  },
});
