import express from 'express';

import authRoutes from './src/routes/auth.routes.js';

const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
    res.send('Server is ready');
});

app.use('/api/v1/auth', authRoutes);

app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})

