const corsOptions  = {
    origin: 'http://localhost', // Allow only this origin to access the API
    methods: 'GET,POST,PUT,DELETE', // Allowable methods
    allowedHeaders: 'Content-Type,Authorization', // Allowable headers
    credentials: true, // Allow cookies to be included in requests
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };
export default corsOptions