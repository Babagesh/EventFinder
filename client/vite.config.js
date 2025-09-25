import { defineConfig } from "vite";

export default defineConfig({
    build:{
        outDir: '../server/public',
        emptyOutDir:true
    },
    server:{
        proxy:{
            '/events':{
                target: 'https://localhost:3001'
            }
        }
    }
})