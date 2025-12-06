const express = require('express')
const router = express.Router()
const {
  getProblemRecommendations,
  getAlgorithmLearningPaths,
  getLearningRecommendations,
  getProblemsByTopic
} = require('../services/recommendation')

/**
 * GET /api/recommendations/problems
 * Get personalized problem recommendations
 * Query params: limit (default 10)
 */
router.get('/problems', (req, res) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit) : 10
    const recommendations = getProblemRecommendations(limit)
    
    res.json({
      success: true,
      data: recommendations,
      count: recommendations.length
    })
  } catch (error) {
    console.error('[RECOMMENDATIONS] Problem recommendation error:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to get problem recommendations'
    })
  }
})

/**
 * GET /api/recommendations/learning-paths
 * Get curated algorithm learning paths
 */
router.get('/learning-paths', (req, res) => {
  try {
    const paths = getAlgorithmLearningPaths()
    
    res.json({
      success: true,
      data: paths,
      count: paths.length
    })
  } catch (error) {
    console.error('[RECOMMENDATIONS] Learning paths error:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to get learning paths'
    })
  }
})

/**
 * GET /api/recommendations/learning-recommendation
 * Get personalized learning recommendation based on weak areas
 */
router.get('/learning-recommendation', (req, res) => {
  try {
    const recommendation = getLearningRecommendations()
    
    res.json({
      success: true,
      data: recommendation
    })
  } catch (error) {
    console.error('[RECOMMENDATIONS] Learning recommendation error:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to get learning recommendation'
    })
  }
})

/**
 * GET /api/recommendations/topic/:topic
 * Get problems for a specific topic
 * Query params: difficulty (Easy|Medium|Hard)
 */
router.get('/topic/:topic', (req, res) => {
  try {
    const { topic } = req.params
    const difficulty = req.query.difficulty || null
    
    const problems = getProblemsByTopic(topic, difficulty)
    
    if (problems.length === 0) {
      return res.json({
        success: true,
        data: [],
        message: `No unsolved problems found for topic: ${topic}`
      })
    }
    
    res.json({
      success: true,
      data: problems,
      count: problems.length,
      topic,
      difficulty: difficulty || 'All'
    })
  } catch (error) {
    console.error('[RECOMMENDATIONS] Topic problems error:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to get problems for topic'
    })
  }
})

module.exports = router
