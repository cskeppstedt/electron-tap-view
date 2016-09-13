import React from 'react'
import styles from './Logo.css'

const viewboxWidth = 548.48
const viewboxHeight = 331.47
const title = 'Logo'
const ratio = viewboxWidth / viewboxHeight

const scale = (width, height, ratio) => {
  if (width != null) {
    width = parseFloat(width)
    height = width / ratio
  } else {
    height = parseFloat(height)
    width = height * ratio
  }

  return {
    scaledWidth: width.toFixed(0),
    scaledHeight: height.toFixed(0)
  }
}

export default function Logo (props) {
  const { width, height, ...remainingProps } = props
  const { scaledWidth, scaledHeight } = scale(width, height, ratio)

  return (
    <span className={styles.root}>
      <svg
        width={scaledWidth}
        height={scaledHeight}
        version='1.1'
        aria-labelledby={title}
        viewBox={`0 0 ${viewboxWidth} ${viewboxHeight}`}
        {...remainingProps}
      >
        <title>{title}</title>
        <path d='M175.614 6.13c-4.71 2.72-130.93 94.3-146.15 105.65-15.214 11.36-28.38 22.71-29.2 25.12-1.557 4.59 4.158 45.25 6.99 49.75.897 1.42 14.78 7.71 30.82 13.96 16.04 6.26 30.66 13.61 32.45 16.42 2.82 4.45 13.16 9.8 48.67 24.88 4.39 1.86 26.62 11.41 49.42 21.19 22.79 9.78 43.91 17.77 46.92 17.77 8.37 0 6.52-6.75-2.5-9.07-4.58-1.17-7.98-5.25-7.98-9.68 0-9.08-6.15-14.66-19.97-17.89-12.1-2.82-26.86-12.84-23.59-16.05 1.3-1.27 10.69.72 20.84 4.41 20.05 7.3 26.99 5.19 18.22-5.39-6.32-7.62-5.96-7.57 23.46 5.03l16.98 7.35v52.68l14.97 6.37c8.24 3.52 18.03 7.95 21.84 9.93 10.32 5.34 11.11 4.78 11.11-9.31 0-11.85-1.75-13.61-20.34-21.32-24.33-10.09-23.47-19.14.99-10.66 20.4 7.06 19.35 7.27 19.35-2.09 0-4.31 1.77-7.84 3.99-7.84 5.19 0 24.32-40.38 20.72-43.74-4.33-4.02-185.74-75.98-196.93-73.88-9.13 1.72-47.42-16.18-47.42-20.09 0-1.81 19.09-17.8 42.43-35.66 23.34-17.85 51.07-39.08 61.65-47.17 10.57-8.09 21.21-14.7 23.71-14.7 6.33 0 139.52 43.01 151.75 49.01 5.49 2.69 40.53 15.1 77.87 27.56 37.34 12.47 69.95 24.17 72.5 26.1 3.26 2.47-.06 7.78-11.23 18.01-16.16 14.8-34.37 30.04-48.17 43.01-34.46 32.39-62.8 55.87-67.39 55.87-2.1 0-14.82-4.41-28.33-9.8-13.5-5.39-25.11-9.4-25.7-8.82-2.9 2.84-17.47 39.47-17.47 43.86 0 2.77 12.58 10.53 27.95 17.28 25.63 11.25 27.95 13.33 27.95 24.13 0 13.83-2.98 14.3-24.33 4.17-8.77-4.16-21.45-8.71-28.2-10.17-21.05-4.54-11.4 5.68 16.72 17.77 14.2 6.1 29.19 11.23 33.32 11.39 4.12.16 14.91-6.16 23.96-14.09 23.87-20.92 107.31-96.84 141.14-128.41l29.08-27.07v-22.43c0-13.29-2.03-23.87-5-26.09-2.74-2.06-35.54-13.83-72.88-26.22-37.33-12.4-79.56-26.64-93.84-31.62-14.28-4.97-36.29-12.12-48.92-15.8-22.52-6.57-94.85-29.59-112.6-34.59-11.11-3.13-16.75-4.47-21.25-5.05-7.04-.9-16.07 4.69-18.38 6.03zm12.84 47.33c-5.03 0-20.15 11.2-58.28 43.01-7.14 5.95-12.98 11.63-12.98 12.74 0 2.07 15.58 8.58 29.95 12.5 7.13 1.94 7.99.28 7.99-15.32 0-12.84 2.34-19.82 8.86-26.22 12.23-12 15.27-6.88 5.36 9.07-12.14 19.56-10.51 25.61 9.61 35.65 9.81 4.9 17.54 10.71 17.23 12.87-.32 2.16 2.82 4.48 6.98 5.27 6.66 1.26 6.87.73 2-5.03-5.09-6.01-4.59-6.2 6.12-1.71 16.06 6.73 22.29 12.83 9.73 9.56-9.6-2.51-9.7-2.42-2.25 3.43 4.27 3.34 9.78 6.12 12.36 6.12 2.57 0 17.07 4.92 32.19 11.03 32 12.93 51.09 18.26 47.92 13.23-1.21-1.93 2.32-2.73 7.74-1.71 5.43 1.02 9.86 4.4 9.86 7.47s7.64 8.92 16.97 12.99c20.35 8.87 33.56 9.69 40.68 2.69 2.9-2.84 11.15-9.84 18.22-15.68l12.86-10.66-5.87-17.52c-6.28-18.73-5.13-20.14 10.86-12.99 7.86 3.52 9.6 6.47 7.61 12.75-2.55 8.06-2.55 8.11 5.87.73 14.67-12.86 15.84-12.06-39.31-32.47-20.28-7.5-65.72-22.74-79.87-26.83-1.1-.32-7.39-2.7-13.98-5.27s-17.37-6.51-23.96-8.82c-6.59-2.32-15.57-5.83-19.96-7.72-17.1-7.38-65.22-23.16-70.51-23.16zm15.85 19.61c5.14-.04 8.11 1.73 6.74 3.92-2.97 4.71-2.56 4.71-9.99 0-4.82-3.06-4.17-3.88 3.25-3.92zm13.72.98c.24-.62 2.21.45 6.24 2.57 4.59 2.41 28.62 11.57 53.42 20.34 84.75 29.97 99.08 35.51 99.08 39.08 0 4.62-2.76 4.61-12.23-.36-17.3-9.1-40.83 14.89-31.45 32.1 2.16 3.96 3.5 7.18 2.87 7.1-.62-.07-10.1-3.44-21.09-7.47-106.86-39.21-125.24-47.29-107.32-47.29 10.03 0 21.47-11.75 21.47-22.06 0-4.2-2.91-11.77-6.49-16.78-3.15-4.42-4.73-6.62-4.5-7.23zm-19.84 19.23c7.68-.09 15.83 1.82 19.1 5.76 4.92 5.96 4.97 6.34-.25 3.19-7.92-4.79-27.96-5.75-27.96-1.35 0 1.9-1.99 3.55-4.37 3.55s-3.52-2.2-2.62-4.9c1.34-4 8.43-6.15 16.1-6.25zm71.51 7.23c-6.43 0-20.72 10.81-20.72 15.68 0 1.53 8.14 5.83 18.1 9.56 15.04 5.64 19.1 5.98 24.33 1.72 9.36-7.63 23.63-8.36 29.45-1.47 4.27 5.04 3.81 7.07-2.49 11.76-4.64 3.44-5.53 5.68-2.37 5.76 8.15.19 22.92-15.09 18.59-19.24-4.95-4.74-56.91-23.77-64.89-23.77zm-30.7 47.17c2.2 0 6.69 1.71 9.98 3.8 3.3 2.09 4.2 3.8 2 3.8s-6.69-1.71-9.98-3.8c-3.3-2.09-4.2-3.8-2-3.8zm130.66.98c3.43-.01 6.43 1.35 10.98 4.05 10.28 6.09 16.5 26.22 8.11 26.22-2.47 0-3.45-1.81-2.12-3.92 1.33-2.12.56-7.29-1.75-11.52-3.19-5.86-7.71-7.44-19.09-6.74-13.01.8-15.13 2.28-16.22 11.52-1.61 13.46-8.74 13.96-8.74.61 0-7.83 3.24-11.29 14.85-16.05 6.66-2.73 10.54-4.15 13.98-4.17zm-356.29 2.94l18.966 6.99c10.43 3.9 22.12 6.49 25.96 5.63 5.94-1.31 6.99 1.34 6.99 18.26 0 10.94-.45 19.79-1 19.6-.55-.18-12.23-5.47-25.96-11.76-23.605-10.82-24.956-12.2-24.956-25.12v-13.6zm245.6 3.93c2.19 0 6.69 1.7 9.98 3.79s4.19 3.8 2 3.8c-2.2 0-6.69-1.71-9.99-3.8-3.29-2.09-4.19-3.79-1.99-3.79zm-156.24 4.16c1.29-.47 3.66.28 8.11 1.96 3.46 1.31 5.33 3.95 4.12 5.88-3.62 5.74-13.73 4.03-13.73-2.33 0-3.29.2-5.04 1.5-5.51zm180.2 5.39c.67-.27 1.96-.18 3.74.49 3.41 1.29 6.24 3.08 6.24 3.92 0 3.18-7.64 1.4-9.98-2.32-.7-1.12-.67-1.81 0-2.09zm-139.9 12.99c2.1-.2 4.18 1.02 5.12 3.8.92 2.69-1.33 4.9-4.99 4.9s-6.1-1.77-5.37-3.92c1.01-2.96 3.15-4.58 5.24-4.78zm231.99 2.82c1.09.28 1.75 1.04 1.75 2.08 0 2.09-2.69 3.8-5.99 3.8-3.29 0-5.99-.75-5.99-1.59 0-.85 2.7-2.56 5.99-3.8 1.65-.62 3.16-.77 4.24-.49zm-262.81 6.37c3.26.38 9.97 2.92 22.21 7.96 25.5 10.51 24.63 9.88 19.97 15.93-2.12 2.75-3.44 11.64-3 19.73.89 16.2-1.23 16.95-21.21 7.59-7.82-3.66-12.98-9.04-12.98-13.47 0-5.17-6.75-10.28-22.59-17.16-15.5-6.73-21.3-11.06-18.47-13.84 2.84-2.79 8.09-2.06 16.73 2.33 13.63 6.92 21.28 5.32 17.72-3.8-1.48-3.79-1.65-5.65 1.62-5.27zm12.6 15.19c-5.37 0-4.48 21.09 1.13 26.59 5.6 5.5 15.22 6.29 15.22 1.23 0-1.93-2.69-4.52-5.99-5.76-3.29-1.24-5.99-4.03-5.99-6.25 0-2.23 2.7-4.05 5.99-4.05 3.3 0 5.99-1.62 5.99-3.55 0-3.5-9.44-8.21-16.35-8.21zm39.81 3.92c2.2 0 5.13 1.77 6.49 3.92 1.36 2.16.58 3.92-1.62 3.92s-5.01-1.76-6.36-3.92c-1.36-2.15-.7-3.92 1.49-3.92zm14.48 7.97c2.19 0 6.69 1.7 9.98 3.8 3.3 2.09 4.2 3.79 2 3.79s-6.69-1.7-9.98-3.79c-3.3-2.1-4.2-3.8-2-3.8zm41.06 25.48c-1.63-.31-3.12-.16-4 .37-3.85 2.34-4.23 22.55-.5 26.22 1.47 1.44 6.24 2.7 10.61 2.7 7.77 0 7.78-.19.5-8.09-6.38-6.92-6.62-8.61-1.62-11.76 5.09-3.22 5.06-4.16 0-7.35-1.6-1.01-3.37-1.77-4.99-2.09zm60.8-6.72c-.57-1.23-2.79-2.34-7.15-4.25-3.38-1.48-6.61-.91-7.14 1.3-1.58 6.57 6.8 12.38 11.38 7.89 2.38-2.33 3.49-3.71 2.91-4.94zm-45.52-12.14c-1.22-1.68-1.19-4.06.79-6.25 1.92-2.12 4.99-1.31 6.82 1.8s1.49 6.07-.78 6.52c-3.11.63-5.61-.39-6.83-2.07z' />
      </svg>
    </span>
  )
}