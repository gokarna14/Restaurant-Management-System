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
        timeStamp: "Time Stamp",
        WaiterID: "Waiter ID",
        phoneNumber: "Phone Number",
    },
    CHEF:{
        name: 'Full Name',
        dob: "Date of birth",
        timeStamp: "Time Stamp",
        ChefID: "Waiter ID",
        phoneNumber: "Phone Number",
    }

}

export const dontIncludeInFrom ={
    CUSTOMERS: ['Customer ID'],
    ORDER_: [],
    WAITER: ['Waiter ID'],
    CHEF: ['Chef ID']
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
    }
}


export const primaryKey ={
    CUSTOMERS: 'CusID'
}