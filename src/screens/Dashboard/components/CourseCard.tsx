import { ViewStyle, TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { useNavigation } from '../..'
import { FONTS } from '../../../constants'

export default (course: Course) => {
  const navigation = useNavigation()
  const backgroundCards = new Array(3).fill(null)

  function formatHumanDateTime(date: Date) {
    const datePart = date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    const timePart = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
    return `${datePart} | ${timePart}`
  }

  function getRandom(arr: number[]) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }

  const backgroundCardStyle = (index: number): ViewStyle => ({
    width: '100%',
    height: '100%',
    backgroundColor: `#fed69c`,
    opacity: 0.25 * (index + 1),
    transform: [{ rotateZ: `${getRandom([7, 6, 5, 4, -4, -5, -6, -7])}deg` }],
    margin: 20,
    position: 'absolute',
    borderRadius: 20,
    zIndex: -index,
  })

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('course:home', { courseId: course.id })}
      style={styles.container}
    >
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>{course.scenario.title}</Text>
        <Text style={styles.courseDate}>{formatHumanDateTime(course.createdAt)}</Text>
        <Text style={styles.courseDetails}>{course.language.name} | 85% native speaker | 6/10 completed</Text>
      </View>
      {backgroundCards.map((_, i) => (
        <View key={i} style={backgroundCardStyle(i)} />
      ))}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    overflow: 'visible',
    position: 'relative',
  },
  courseCard: {
    display: 'flex',
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 60,
    borderRadius: 20,
    width: '100%',
    minHeight: 100,
    backgroundColor: 'white',
    zIndex: 9,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  courseTitle: {
    fontSize: 24,
    fontFamily: FONTS.POPPINS.MEDIUM,
  },
  courseDate: {
    fontSize: 10,
  },
  courseDetails: {},
})