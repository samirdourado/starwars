const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src', 'scss')]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cryptospro.com.br',
               
            },
        ],
    },
    
}

module.exports = nextConfig
