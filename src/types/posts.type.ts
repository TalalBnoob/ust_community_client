import { staff, student } from './userProfile.type'

export interface post {
  id: number
  user_id: number
  title: null | string
  body: string
  attachment_url: null
  created_at: string
  updated_at: string
  isLiked: boolean
  likes: number
  user: student | staff
  comments: comment[]
}

export interface comment {
  id: number
  user_id: number
  post_id: number
  body: string
  attachment_url: null
  created_at: string
  updated_at: string
  user: student | staff
}