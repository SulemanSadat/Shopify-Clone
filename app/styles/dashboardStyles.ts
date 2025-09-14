import { StyleSheet } from 'react-native';

export const dashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  
  // Header Section
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    maxWidth: 1200, // Max width for desktop
    alignSelf: 'center',
    width: '100%',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  storeName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1D1D1F',
    flex: 1,
  },
  notificationIcon: {
    marginLeft: 'auto',
  },

  // Search Bar
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 16,
    maxWidth: 1200, // Max width for desktop
    alignSelf: 'center',
    width: '100%',
  },
  searchInput: {
    marginLeft: 12,
    flex: 1,
    fontSize: 16,
    color: '#1D1D1F',
  },

  // Date Filter + Report Button
  dateReportRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
    maxWidth: 1200, // Max width for desktop
    alignSelf: 'center',
    width: '100%',
  },
  datePicker: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePickerText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1D1D1F',
  },
  chevronIcon: {
    marginLeft: 8,
  },
  reportBtn: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  reportBtnText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#007AFF',
  },

  // Live View Card
  liveCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  liveText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8E8E93',
    marginBottom: 16,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  metricColumn: {
    flex: 1,
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#8E8E93',
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1D1D1F',
  },
  metricValueDesktop: {
    fontSize: 28, // Slightly larger on desktop
    fontWeight: '700',
    color: '#1D1D1F',
  },
  chartContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  chart: {
    borderRadius: 16,
  },

  // Responsive Layout Styles
  cardContainerMobile: {
    paddingHorizontal: 16,
    gap: 16,
  },
  cardContainerDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 16,
    justifyContent: 'space-between',
  },
  desktopCard: {
    width: '48%', // ~48% width as specified
    minHeight: 400, // Ensure consistent height
    marginHorizontal: 0,
    marginTop: 0,
  },

  // Get Ready to Sell Checklist
  checklistCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  checklistHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  checklistTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1D1D1F',
  },
  checklistHeaderIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ellipsisIcon: {
    marginLeft: 12,
  },
  checklistSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 8,
  },
  progressContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1D1D1F',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  taskText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1D1D1F',
    marginLeft: 12,
  },
});
