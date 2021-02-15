import React from 'react'
import CMS from 'netlify-cms-app'

// Import main site styles as a string to inject into the CMS preview pane
// eslint-disable-next-line import/no-webpack-loader-syntax
import styles from '!css-loader!postcss-loader!sass-loader!../css/main.css'

import HomePreview from './cms-preview-templates/home'
import PostPreview from './cms-preview-templates/post'
import ProductsPreview from './cms-preview-templates/products'
import ValuesPreview from './cms-preview-templates/values'
import ContactPreview from './cms-preview-templates/contact'

CMS.registerPreviewStyle(styles.toString(), { raw: true })
CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('post', PostPreview)
CMS.registerPreviewTemplate('products', ProductsPreview)
CMS.registerPreviewTemplate('values', ValuesPreview)
CMS.registerPreviewTemplate('contact', ContactPreview)
CMS.init()
