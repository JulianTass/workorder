const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors({origin:true}))
const port = 5500;



// In-memory storage (replace with actual database in production)
let workOrders = [];

// Create work order
app.post('/api/work-orders', (req, res) => {
        
    console.log("itworked");
    
    const newWorkOrder= {
         workOrderNo,
         customerId,
         customerName,
         email,
         phoneNo,
         workOrderName = `WO-${Date.now()}`,
         description,
         severity,
         } = req.body

    workOrders.push(newWorkOrder);
    res.json(workOrders)
    console.log("itworked")
    
    //const workOrder = {
          //id: uuidv4(),
          // workOrderNo: `WO-${Date.now()}`,
         //  customerId,
          // customerName,
          // email,
           //phoneNo,
          // workOrderName,
          // description,
          // severity: severity || 'Low',
          // status: 'New',
           //createdAt: new Date(),
           //updatedAt: new Date()
       //};




});
       
 


// Get all work orders
app.get('/api/work-orders', (req, res) => {
    
  
    const formattedJson = JSON.stringify(workOrders, null, 2);
    res.send(formattedJson)
   
    
      
   
});

// Get single work order
app.get('/api/work-orders/:id', (req, res) => {
    try {
        const workOrder = workOrders.find(wo => wo.id === req.params.id);
        if (!workOrder) {
            return res.status(404).json({ error: 'Work order not found' });
        }
        res.json(workOrder);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch work order' });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});