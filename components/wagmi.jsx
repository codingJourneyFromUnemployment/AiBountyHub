import { configureChains, mainnet } from 'wagmi'
import { sepolia } from '@wagmi/core'
import { publicProvider } from 'wagmi/providers/public'
 
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia],
  [publicProvider()],
)

const Config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})

export { Config }