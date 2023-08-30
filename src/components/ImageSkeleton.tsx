import { Skeleton } from '@mui/material'
import React from 'react'

const ImageSkeleton = () => {
  return (
    <Skeleton variant="rectangular" sx={{ width: "100%", paddingBottom: "56%" }}>ImageSkeleton</Skeleton>
  )
}

export default ImageSkeleton