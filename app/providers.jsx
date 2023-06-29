
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { IntlProvider } from 'react-intl'

export function Providers({ children }) {

  return (
    <CacheProvider>
      <IntlProvider locale='tr'>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </IntlProvider>
    </CacheProvider>
  )
}
