
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../../lib/apollo'
export default function Home() {
  return(
    <ApolloProvider client={apolloClient}>
        <>Hello World!</>
    </ApolloProvider>
)
}
