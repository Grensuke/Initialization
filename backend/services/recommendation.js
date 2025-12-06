// Problem Database - Mock data representing problems from various platforms
const problemDatabase = [
  // Easy Problems
  {
    id: 1,
    platform: 'LeetCode',
    title: 'Two Sum',
    difficulty: 'Easy',
    topics: ['Arrays', 'Hash Table'],
    rating: 4.8,
    solves: 15000,
    successRate: 92,
    estimatedTime: 15
  },
  {
    id: 2,
    platform: 'LeetCode',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    topics: ['Stack', 'String'],
    rating: 4.5,
    solves: 8500,
    successRate: 88,
    estimatedTime: 10
  },
  {
    id: 3,
    platform: 'Codeforces',
    title: 'A. Petya and Strings',
    difficulty: 'Easy',
    topics: ['Strings', 'Implementation'],
    rating: 4.2,
    solves: 5200,
    successRate: 85,
    estimatedTime: 10
  },
  {
    id: 4,
    platform: 'CodeChef',
    title: 'Beginner Practice: Sum of Digits',
    difficulty: 'Easy',
    topics: ['Math', 'Implementation'],
    rating: 4.0,
    solves: 3000,
    successRate: 90,
    estimatedTime: 12
  },
  {
    id: 5,
    platform: 'LeetCode',
    title: 'Palindrome Number',
    difficulty: 'Easy',
    topics: ['Math'],
    rating: 4.3,
    solves: 7000,
    successRate: 82,
    estimatedTime: 15
  },

  // Medium Problems
  {
    id: 6,
    platform: 'LeetCode',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    topics: ['Hash Table', 'Sliding Window', 'Strings'],
    rating: 4.6,
    solves: 9000,
    successRate: 68,
    estimatedTime: 25
  },
  {
    id: 7,
    platform: 'LeetCode',
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    topics: ['Linked List', 'Math'],
    rating: 4.4,
    solves: 7500,
    successRate: 70,
    estimatedTime: 20
  },
  {
    id: 8,
    platform: 'Codeforces',
    title: 'B. Segment with Big Sum',
    difficulty: 'Medium',
    topics: ['Arrays', 'Sliding Window'],
    rating: 4.3,
    solves: 4200,
    successRate: 65,
    estimatedTime: 30
  },
  {
    id: 9,
    platform: 'LeetCode',
    title: 'Binary Tree Level Order Traversal',
    difficulty: 'Medium',
    topics: ['Trees', 'BFS', 'Queue'],
    rating: 4.5,
    solves: 6500,
    successRate: 72,
    estimatedTime: 25
  },
  {
    id: 10,
    platform: 'LeetCode',
    title: 'Course Schedule',
    difficulty: 'Medium',
    topics: ['Graphs', 'Topological Sort', 'DFS'],
    rating: 4.4,
    solves: 5500,
    successRate: 65,
    estimatedTime: 35
  },
  {
    id: 11,
    platform: 'CodeChef',
    title: 'Coin Change',
    difficulty: 'Medium',
    topics: ['Dynamic Programming', 'Math'],
    rating: 4.3,
    solves: 3800,
    successRate: 60,
    estimatedTime: 25
  },
  {
    id: 12,
    platform: 'LeetCode',
    title: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    topics: ['Dynamic Programming', 'Strings'],
    rating: 4.4,
    solves: 7200,
    successRate: 58,
    estimatedTime: 30
  },

  // Hard Problems
  {
    id: 13,
    platform: 'LeetCode',
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    topics: ['Arrays', 'Binary Search'],
    rating: 4.2,
    solves: 4500,
    successRate: 35,
    estimatedTime: 45
  },
  {
    id: 14,
    platform: 'LeetCode',
    title: 'Regular Expression Matching',
    difficulty: 'Hard',
    topics: ['Dynamic Programming', 'Strings'],
    rating: 4.0,
    solves: 3200,
    successRate: 30,
    estimatedTime: 50
  },
  {
    id: 15,
    platform: 'Codeforces',
    title: 'C. Segment Tree',
    difficulty: 'Hard',
    topics: ['Data Structures', 'Segment Trees'],
    rating: 4.1,
    solves: 2000,
    successRate: 28,
    estimatedTime: 60
  },
  {
    id: 16,
    platform: 'LeetCode',
    title: 'Word Ladder II',
    difficulty: 'Hard',
    topics: ['Graphs', 'BFS', 'Backtracking'],
    rating: 3.9,
    solves: 2800,
    successRate: 25,
    estimatedTime: 55
  },
  {
    id: 17,
    platform: 'CodeChef',
    title: 'Difficult DP Problem',
    difficulty: 'Hard',
    topics: ['Dynamic Programming', 'Optimization'],
    rating: 3.8,
    solves: 1500,
    successRate: 22,
    estimatedTime: 60
  }
]

// Algorithm Learning Paths - Structured learning progression
const learningPaths = [
  {
    id: 1,
    name: 'Data Structures Fundamentals',
    description: 'Master the core data structures used in competitive programming',
    difficulty: 'Beginner',
    duration: '4 weeks',
    topics: [
      {
        topic: 'Arrays & Lists',
        problems: [1, 3, 4],
        concepts: ['Indexing', 'Iteration', 'Array manipulation'],
        resources: ['Introduction to Arrays', 'Array Operations Practice']
      },
      {
        topic: 'Stacks & Queues',
        problems: [2, 9],
        concepts: ['LIFO', 'FIFO', 'Push/Pop operations'],
        resources: ['Stack Implementation', 'Queue Use Cases']
      },
      {
        topic: 'Hash Tables',
        problems: [1, 6],
        concepts: ['Hashing', 'Collision handling', 'Key-value pairs'],
        resources: ['Hash Table Fundamentals', 'Hash Problem Solving']
      },
      {
        topic: 'Linked Lists',
        problems: [7],
        concepts: ['Node structure', 'Pointer manipulation', 'List traversal'],
        resources: ['Linked List Basics', 'Common Operations']
      }
    ],
    progress: 40
  },
  {
    id: 2,
    name: 'String Algorithms',
    description: 'Learn efficient string manipulation and pattern matching techniques',
    difficulty: 'Intermediate',
    duration: '3 weeks',
    topics: [
      {
        topic: 'String Basics',
        problems: [2, 3, 5],
        concepts: ['String properties', 'Character operations', 'String comparison'],
        resources: ['String Fundamentals', 'ASCII and Unicode']
      },
      {
        topic: 'Pattern Matching',
        problems: [6, 12],
        concepts: ['KMP algorithm', 'Hashing approach', 'Trie-based matching'],
        resources: ['Pattern Matching Algorithms', 'KMP Tutorial']
      },
      {
        topic: 'Palindromes & Substrings',
        problems: [5, 12],
        concepts: ['Palindrome checking', 'Longest substring problems'],
        resources: ['Palindrome Problems', 'Substring Techniques']
      }
    ],
    progress: 30
  },
  {
    id: 3,
    name: 'Graph Theory Essentials',
    description: 'Comprehensive guide to graphs, traversals, and shortest paths',
    difficulty: 'Intermediate',
    duration: '5 weeks',
    topics: [
      {
        topic: 'Graph Basics & Representation',
        problems: [10],
        concepts: ['Graph types', 'Adjacency list/matrix', 'Weighted graphs'],
        resources: ['Graph Representation', 'Building Graph Data Structures']
      },
      {
        topic: 'Depth First Search (DFS)',
        problems: [10, 15],
        concepts: ['DFS traversal', 'Cycle detection', 'Connected components'],
        resources: ['DFS Algorithm', 'DFS Applications']
      },
      {
        topic: 'Breadth First Search (BFS)',
        problems: [9, 16],
        concepts: ['BFS traversal', 'Level order', 'Shortest paths unweighted'],
        resources: ['BFS Algorithm', 'BFS vs DFS Comparison']
      },
      {
        topic: 'Shortest Paths',
        problems: [16],
        concepts: ['Dijkstra', 'Bellman-Ford', 'Floyd-Warshall'],
        resources: ['Shortest Path Algorithms', 'Implementation Guide']
      },
      {
        topic: 'Topological Sorting',
        problems: [10],
        concepts: ['Topological order', 'DAG properties', 'Applications'],
        resources: ['Topological Sort', 'Cycle Detection in Directed Graphs']
      }
    ],
    progress: 15
  },
  {
    id: 4,
    name: 'Dynamic Programming Mastery',
    description: 'From basic DP concepts to advanced optimization techniques',
    difficulty: 'Advanced',
    duration: '6 weeks',
    topics: [
      {
        topic: 'DP Foundations',
        problems: [11, 12],
        concepts: ['Overlapping subproblems', 'Memoization', 'Tabulation'],
        resources: ['DP Fundamentals', 'Fibonacci Problem']
      },
      {
        topic: '1D DP',
        problems: [11],
        concepts: ['Linear DP', 'State transitions', 'Optimization'],
        resources: ['1D DP Problems', 'Climbing Stairs Pattern']
      },
      {
        topic: '2D DP',
        problems: [12, 14],
        concepts: ['2D states', 'Matrix DP', 'Path problems'],
        resources: ['2D DP Guide', 'Grid Problems']
      },
      {
        topic: 'Advanced DP',
        problems: [14, 17],
        concepts: ['DP optimization', 'Game theory DP', 'Complex state design'],
        resources: ['Advanced DP Techniques', 'Convex Hull Trick']
      }
    ],
    progress: 0
  }
]

// User Profile Mock - Represents user's solving history and weak areas
function getUserProfile() {
  return {
    solvedProblems: [1, 2, 3, 4, 5, 7],
    attemptedProblems: [8, 9],
    failedProblems: [10],
    topicProficiency: {
      'Arrays': 95,
      'Hash Table': 85,
      'Stack': 75,
      'Strings': 70,
      'Linked List': 60,
      'Trees': 40,
      'Graphs': 25,
      'Dynamic Programming': 15,
      'Sliding Window': 80,
      'Binary Search': 35,
      'Greedy': 50,
      'Sorting': 85,
      'Math': 70
    },
    platformProgress: {
      'LeetCode': { solved: 120, total: 2500 },
      'Codeforces': { solved: 45, total: 8000 },
      'CodeChef': { solved: 28, total: 5000 }
    },
    currentStreak: 12,
    totalSolves: 193,
    averageAccuracy: 68
  }
}

/**
 * Get personalized problem recommendations
 * Scoring considers: difficulty progression, weak topics, success rate, platform diversity
 */
function getProblemRecommendations(limit = 10) {
  const userProfile = getUserProfile()
  const unsolvedProblems = problemDatabase.filter(p => !userProfile.solvedProblems.includes(p.id))

  // Score each unsolved problem
  const scoredProblems = unsolvedProblems.map(problem => {
    let score = 0

    // 1. Difficulty progression (aim for slightly harder than current level)
    const avgSolvedDifficulty = calculateAverageDifficulty(
      userProfile.solvedProblems.map(id => problemDatabase.find(p => p.id === id))
    )
    const difficultyGap = Math.abs(getDifficultyValue(problem.difficulty) - avgSolvedDifficulty)
    score += (3 - difficultyGap) * 15 // Prefer problems close to next difficulty level

    // 2. Topic proficiency - prioritize weak topics
    const topicWeakness = problem.topics.reduce((sum, topic) => {
      return sum + (100 - (userProfile.topicProficiency[topic] || 50))
    }, 0) / problem.topics.length
    score += topicWeakness * 0.8

    // 3. Problem quality (rating and success rate)
    score += problem.rating * 5
    score += problem.successRate * 0.3

    // 4. Platform diversity - boost underrepresented platforms
    const platformSolves = userProfile.platformProgress[problem.platform]?.solved || 0
    const platformRatio = platformSolves / userProfile.totalSolves
    if (platformRatio < 0.2) score += 10 // Boost underrepresented platforms

    // 5. Avoid recently failed problems temporarily
    if (userProfile.failedProblems.includes(problem.id)) {
      score *= 0.3
    }

    return { ...problem, score }
  })

  // Sort by score and return top recommendations
  return scoredProblems
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ score, ...problem }) => problem)
}

/**
 * Get curated algorithm learning paths based on user level
 */
function getAlgorithmLearningPaths() {
  const userProfile = getUserProfile()
  const userLevel = determineUserLevel(userProfile)

  // Filter paths by user level and enrich with progress
  const pathsForLevel = learningPaths
    .filter(path => {
      const pathDiffMap = { 'Beginner': 0, 'Intermediate': 1, 'Advanced': 2 }
      const levelMap = { 'Beginner': 0, 'Intermediate': 1, 'Advanced': 2 }
      return pathDiffMap[path.difficulty] <= levelMap[userLevel]
    })
    .map(path => ({
      ...path,
      topics: path.topics.map(topic => ({
        ...topic,
        relatedProblems: topic.problems.map(id => problemDatabase.find(p => p.id === id))
      }))
    }))

  return pathsForLevel
}

/**
 * Get personalized learning recommendations based on solving patterns
 */
function getLearningRecommendations() {
  const userProfile = getUserProfile()

  // Identify weak areas
  const sortedTopics = Object.entries(userProfile.topicProficiency)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 5)

  const weakestTopic = sortedTopics[0][0]
  const weakTopics = sortedTopics.map(([topic]) => topic)

  // Find relevant learning path
  const relevantPath = learningPaths.find(path =>
    path.topics.some(t => weakTopics.includes(t.topic))
  )

  return {
    recommendation: `Your weakest area is "${weakestTopic}". Focus on the "${relevantPath.name}" learning path.`,
    nextSteps: [
      `Practice easy problems in ${weakestTopic}`,
      `Complete topics in the ${relevantPath.name} learning path`,
      `Review 3-5 medium problems before attempting hard ones`,
      `Track your progress over 2-3 weeks`
    ],
    estimatedTime: relevantPath.duration,
    suggestedPath: relevantPath.id,
    focusTopics: weakTopics
  }
}

/**
 * Get problem recommendations for specific learning topic
 */
function getProblemsByTopic(topic, difficulty = null) {
  let recommendations = problemDatabase.filter(p =>
    p.topics.includes(topic) &&
    !getUserProfile().solvedProblems.includes(p.id)
  )

  if (difficulty) {
    recommendations = recommendations.filter(p => p.difficulty === difficulty)
  }

  return recommendations.sort((a, b) => b.rating - a.rating)
}

// Helper functions
function calculateAverageDifficulty(problems) {
  if (!problems || problems.length === 0) return 1
  const sum = problems.reduce((acc, p) => acc + getDifficultyValue(p.difficulty), 0)
  return sum / problems.length
}

function getDifficultyValue(difficulty) {
  const difficultyMap = { 'Easy': 1, 'Medium': 2, 'Hard': 3 }
  return difficultyMap[difficulty] || 1
}

function determineUserLevel(userProfile) {
  const avgProficiency = Object.values(userProfile.topicProficiency).reduce((a, b) => a + b, 0) /
    Object.values(userProfile.topicProficiency).length

  if (avgProficiency < 40) return 'Beginner'
  if (avgProficiency < 70) return 'Intermediate'
  return 'Advanced'
}

module.exports = {
  getProblemRecommendations,
  getAlgorithmLearningPaths,
  getLearningRecommendations,
  getProblemsByTopic,
  problemDatabase,
  learningPaths
}
