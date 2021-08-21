// The most important file

export const SearchKeys ={
    CUSTOMERS:{
        "First Name": 'fname',
        "Middle Name": 'mname',
        "Last Name": 'lname',
        "Customer ID": 'CusID',
        "Phone Number": 'phoneNumber',
        "Email Address": 'emailAddress',
        "Date of birth": 'dob',
        "Address": 'address',
        "Sex": "sex"
    },
    WAITER:{
        'Full Name': "name",
        "Date of birth":"dob", 
        "Phone Number": 'phoneNumber',
        "Waiter ID": 'WaiterID'
    },
    CHEF:{
        'Full Name': "name",
        "Date of birth":"dob", 
        "Phone Number": 'phoneNumber',
        "Chef ID": 'ChefID'
    },
    MENU:{
        'Menu Number': 'MenuNumber',
        'Menu Name': 'MenuName'
    },
    MenuCategory:{
        'Category Name': 'CategoryName',
        'Menu Number': 'MenuNumber',
        'Category ID': "CategoryID"
    },
    DISH:{
        'Category ID': "CategoryID",
        "Chef ID": 'ChefID',
        'Dish Name': 'DishName',
        'Dish ID': "DishID"
    },
    ORDER_:{
        'Order ID': 'OrderID',
        "Customer ID": 'CusID',
        "Completed": 'completed',
        "Waiter ID": 'WaiterID'
    },
    TABLE_:{
        'Table Number':'TableNumber',
        "Waiter ID": 'WaiterID',
        'Order ID': 'OrderID',
        'Capacity': 'Capacity',
        'Occupied': 'occupied'

    },
    RESERVATION:{
        'Reservation Date': 'ReservationDate',
        "Customer ID": 'CusID',
        'Table Number':'TableNumber',
        'Reservation Time': 'ReservationTime'
    }
}

export const keyValue = {
    CUSTOMERS:(defaultString)=>{
        return{
            "First Name": defaultString,
            "Middle Name": defaultString,
            "Last Name": defaultString,
            "Customer ID": defaultString,
            "Phone Number": defaultString,
            "Email Address": defaultString,
            "Date of birth": defaultString,
            "Address": defaultString,
        }
    },
    WAITER:(defaultString)=>{
        return{
            'Full Name': defaultString,
            "Date of birth":defaultString, 
            "Phone Number": defaultString,
            "Waiter ID": defaultString
        }
    },
    CHEF:(defaultString)=>{
        return{
            'Full Name':defaultString,
            "Date of birth":defaultString, 
            "Phone Number": defaultString,
            "Chef ID": defaultString
        }
    },
    MENU:(defaultString)=>{
        return{
            'Menu Number':defaultString,
            'Menu Name': defaultString
        }
    },
    MenuCategory:(defaultString)=>{
        return{
            'Category Name':defaultString,
            'Menu Number': defaultString
        }
    },
    DISH:(defaultString)=>{
        return{
            'Category ID': defaultString,
            "Chef ID": defaultString,
            'Dish Name': defaultString,
            'Dish ID': defaultString,
        }
    },
    ORDER_:(defaultString)=>{
        return{
            'Order ID': defaultString,
            "Customer ID":defaultString,
            "Completed": defaultString,
            "Waiter ID": defaultString        
        }
    },
    TABLE_:(defaultString)=>{
       return {
        'Table Number':defaultString,
        "Waiter ID": defaultString,
        'Order ID': defaultString,
        'Capacity': defaultString,
        'Occupied': defaultString
        }
    },
    RESERVATION:(ds)=>{
        return{
            'Reservation Date':ds,
            'Customer ID':ds,
            'Table Number': ds,
            'ReservationTime': ds
        }
    }
}

export const columns = {
    CUSTOMERS: {
        fname : 'First Name',
        mname: "Middle Name",
        lname: "Last Name",
        sex: "Sex",
        phoneNumber: "Phone Number",
        emailAddress: "Email Address",
        dob: "Date of birth",
        address: "Address",
        timeStamp: "Time Stamp",
        CusID: "Customer ID [PK]"
            },
    WAITER:{
        name: 'Full Name',
        dob: "Date of birth",
        timestamp: "Time Stamp",
        WaiterID: "Waiter ID",
        phoneNumber: "Phone Number",
    },
    CHEF:{
        name: 'Full Name',
        dob: "Date of birth",
        timestamp: "Time Stamp",
        ChefID: "Chef ID",
        phoneNumber: "Phone Number",
    },
    MENU:{
        MenuNumber:'Menu Number',
        MenuName: 'Menu Name',
        timestamp: "Time Stamp",
    },
    MenuCategory:{
        MenuNumber:'Menu Number',
        CategoryID: 'Category ID',
        CategoryName:'Category Name'
    },
    DISH:{
        DishName:'Dish Name',
        ChefID: "Waiter ID",
        CategoryID: 'Category ID',
        DishID: 'DishID'
    },
    ORDER_:{
        OrderID:'Order ID',
        CusID:'Customer ID',
        timestamp: "Time Stamp",
        completed: 'Completed',
        WaiterID: 'Waiter ID'
    },
    TABLE_:{
        TableNumber: 'Table Number',
        WaiterID: 'Waiter ID',
        OrderID: 'Order ID',
        Capacity: 'Capacity',
        occupied: 'Occupied'
    },
    RESERVATION:{
        ReservationDate: 'Reservation Date',
        timestamp: 'Timestamp',
        CusID: 'Customer ID',
        TableNumber: 'Table Number',
        ReservationNumber: 'Reservation Number',
        ReservationTime: 'Reservation Time'
    },
    l5o:{
        OrderID: 'Order ID',
        CustomerFirstName:'Customer First Name',
        CustomerLastName: 'Customer Last Name',
        CusID: 'Customer ID',
        WaiterName: 'Name of the'
    }

}

export const dontIncludeInFrom ={
    CUSTOMERS: ['Customer ID'],
    ORDER_: [],
    WAITER: ['Waiter ID'],
    CHEF: ['Chef ID'],
    MENU:['Menu Number'],
    MenuCategory:['Menu Number', 'Category ID'],
    DISH: [],
    TABLE_:[],
    RESERVATION: []
}

export const dataType = {
    CUSTOMERS: {
        "First Name required": true,
        "Middle Name required": false,
        "Last Name required": true,
        "Sex required": true,
        "Phone Number required": true,
        "Email Address required": true,
        "Date of birth required": true,
        "Address required": false,

        "First Name class": "nav btn btn-outline-secondary",
        "Middle Name class": "nav btn btn-outline-secondary",
        "Last Name class": "nav btn btn-outline-secondary",
        "Sex class": "nav btn btn-outline-secondary",
        "Phone Number class": "nav btn btn-outline-secondary",
        "Email Address class": "nav btn btn-outline-secondary",
        "Date of birth class": "nav btn btn-secondary",
        "Address class": "nav btn btn-outline-secondary",

        "First Name id": "",
        "Middle Name id": "",
        "Last Name id": "",
        "Sex id": "",
        "Phone Number id": "",
        "Email Address id": "",
        "Date of birth id": "",
        "Address id": "",

        "First Name type": "text",
        "Middle Name type": "text",
        "Last Name type": "text",
        "Sex type": "checkbox",
        "Phone Number type": "text",
        "Email Address type": "email",
        "Date of birth type": "date",
        "Address type": "address",

        "Sex select" : true,
        "Sex select options": <><option>--Select--</option><option>M</option><option>F</option><option>O</option></>
    
    },
    WAITER:{
        "Full Name type": 'text',
        "Date of birth type": "date",
        "Phone Number type": "text",
        "Phone Number class": "nav btn btn-light",
        "Date of birth class": "nav btn btn-light",
        "Full Name class": "nav btn btn-light",
    },
    CHEF:{
        "Full Name type": 'text',
        "Date of birth type": "date",
        "Phone Number type": "text",
        "Phone Number class": "nav btn btn-light",
        "Date of birth class": "nav btn btn-light",
        "Full Name class": "nav btn btn-light",
    },
    MENU:{ },
    MenuCategory:{},
    DISH:{},
    ORDER_:{},
    TABLE_:{},
    RESERVATION:{}
}


export const primaryKey ={
    CUSTOMERS: 'CusID',
    WAITER: 'WaiterID',
    CHEF: 'ChefID',
    MENU: 'MenuNumber',
    MenuCategory: 'CategoryID',
    DISH: 'DishID',
    ORDER_: 'OrderID',
    TABLE_:'TableNumber',
    RESERVATION: 'ReservationNumber'
}

export const sqls = [
    'select o.OrderID, CONCAT(c.fname," " ,c.lname) as Customer, c.CusID, w.name WaiterName, w.WaiterID ,t.TableNumber, o.completed from ORDER_ o inner join WAITER w on  o.WaiterID = w.WaiterID inner join CUSTOMERS c on c.CusID = o.CusID inner JOIN TABLE_ t on t.TableNumber = o.TableNumber;',
    'select r.ReservationTime, r.ReservationDate, t.TableNumber, CONCAT(c.fname," " ,c.lname) as Customer, c.address CusAddress, r.timestamp from TABLE_ t inner join RESERVATION r on r.TableNumber = t.TableNumber inner join CUSTOMERS c on c.CusID = r.CusID;',


]

export const cols =[
        [
        'OrderID', 
        'Customer', 
        'CusID', 
        'WaiterName', 
        'WaiterID',
        'TableNumber', 
        'completed'
        ],
        [
            'ReservationTime',
            'ReservationDate',
            'TableNumber',
            'Customer',
            'CusAddress',
            'timestamp'
        ]

]

export const labels = [
    'Latest orders',
    'Reservations'
]
