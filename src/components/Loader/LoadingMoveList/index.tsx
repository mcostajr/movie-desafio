import ContentLoader from "react-content-loader"

export function LoadingCard() {
  return (
    <div>
      {window.screen.width > 768 ? 
        <ContentLoader
          height={300}
          width={'100%'}
        >
          <rect x="0" y="0" rx="3" ry="3" width="200" height="300" />
          <rect x="200" y="0" rx="3" ry="3" width="100%" height="70" />
          <circle cx="280" cy="60" r="50" />
          <rect x="350" y="80" rx="3" ry="3" width="70" height="8" /> 
          <rect x="230" y="130" rx="3" ry="3" width="100%" height="6" /> 
          <rect x="230" y="150" rx="3" ry="3" width="70%" height="6" />
          <rect x="230" y="170" rx="3" ry="3" width="50%" height="6" />
          <rect x="230" y="200" rx="10" ry="10" width="50" height="30" />
          <rect x="300" y="200" rx="10" ry="10" width="100" height="30" />
          <rect x="420" y="200" rx="10" ry="10" width="50" height="30" />
        </ContentLoader> 
        : 
        <ContentLoader
          height={342}
          width={200}
        >
          <rect x="0" y="0" rx="3" ry="3" width="200" height="300" />
          <circle cx="40" cy="295" r="30" />
          <rect x="70" y="310" rx="3" ry="3" width="130" height="8" /> 
          <rect x="70" y="330" rx="3" ry="3" width="60" height="8" /> 
        </ContentLoader>
      }
    </div>
  )
}