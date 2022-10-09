import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
     <ContentLoader
          speed={2}
          width={350}
          height={387}
          viewBox="0 0 350 387"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
     >
          <rect x="0" y="280" rx="0" ry="0" width="154" height="20" />
          <rect x="0" y="325" rx="0" ry="0" width="23" height="20" />
          <rect x="225" y="325" rx="0" ry="0" width="60" height="20" />
          <rect x="33" y="15" rx="0" ry="0" width="220" height="230" />
          <rect x="233" y="280" rx="0" ry="0" width="52" height="20" />
          <rect x="30" y="325" rx="0" ry="0" width="30" height="20" />
     </ContentLoader>
)

export default MyLoader