import { Ionicons } from '@expo/vector-icons';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ProductsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Products</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Total Products</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>18</Text>
            <Text style={styles.statLabel}>In Stock</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>Out of Stock</Text>
          </View>
        </View>

        {/* Product Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            <TouchableOpacity style={[styles.categoryChip, styles.activeCategory]}>
              <Text style={[styles.categoryText, styles.activeCategoryText]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryChip}>
              <Text style={styles.categoryText}>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryChip}>
              <Text style={styles.categoryText}>Clothing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryChip}>
              <Text style={styles.categoryText}>Accessories</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Product List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Products</Text>
          
          <View style={styles.productCard}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/80x80/007AFF/FFFFFF?text=📱' }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>iPhone 15 Pro</Text>
              <Text style={styles.productCategory}>Electronics</Text>
              <Text style={styles.productPrice}>$999.00</Text>
            </View>
            <View style={styles.productActions}>
              <Text style={styles.stockStatus}>In Stock</Text>
              <TouchableOpacity style={styles.moreButton}>
                <Ionicons name="ellipsis-horizontal" size={16} color="#8E8E93" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.productCard}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/80x80/34C759/FFFFFF?text=👕' }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Cotton T-Shirt</Text>
              <Text style={styles.productCategory}>Clothing</Text>
              <Text style={styles.productPrice}>$29.99</Text>
            </View>
            <View style={styles.productActions}>
              <Text style={styles.stockStatus}>In Stock</Text>
              <TouchableOpacity style={styles.moreButton}>
                <Ionicons name="ellipsis-horizontal" size={16} color="#8E8E93" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.productCard}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/80x80/FF9500/FFFFFF?text=🎧' }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Wireless Headphones</Text>
              <Text style={styles.productCategory}>Electronics</Text>
              <Text style={styles.productPrice}>$199.99</Text>
            </View>
            <View style={styles.productActions}>
              <Text style={[styles.stockStatus, styles.outOfStock]}>Out of Stock</Text>
              <TouchableOpacity style={styles.moreButton}>
                <Ionicons name="ellipsis-horizontal" size={16} color="#8E8E93" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.productCard}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/80x80/FF3B30/FFFFFF?text=💼' }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Leather Backpack</Text>
              <Text style={styles.productCategory}>Accessories</Text>
              <Text style={styles.productPrice}>$149.99</Text>
            </View>
            <View style={styles.productActions}>
              <Text style={styles.stockStatus}>In Stock</Text>
              <TouchableOpacity style={styles.moreButton}>
                <Ionicons name="ellipsis-horizontal" size={16} color="#8E8E93" />
              </TouchableOpacity>
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
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
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
  categoriesScroll: {
    marginBottom: 20,
  },
  categoryChip: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  activeCategory: {
    backgroundColor: '#007AFF',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8E8E93',
  },
  activeCategoryText: {
    color: '#FFFFFF',
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D1D1F',
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D1D1F',
  },
  productActions: {
    alignItems: 'flex-end',
  },
  stockStatus: {
    fontSize: 12,
    fontWeight: '500',
    color: '#34C759',
    backgroundColor: '#E8F5E8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 8,
  },
  outOfStock: {
    color: '#FF3B30',
    backgroundColor: '#FFE5E5',
  },
  moreButton: {
    padding: 4,
  },
});
