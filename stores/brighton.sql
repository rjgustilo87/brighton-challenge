CREATE TABLE Stores (
    store_id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name2 VARCHAR(255),
    type_id INT NOT NULL,
    address1 VARCHAR(255) NOT NULL,
    address2 VARCHAR(255),
    city VARCHAR(255) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    facebook_url VARCHAR(255),
    video_url VARCHAR(255),
    email VARCHAR(255),
    viewstore_url VARCHAR(255)
);

CREATE TABLE Contacts (
    contact_id INT PRIMARY KEY,
    store_id INT,
    contact_title VARCHAR(100) NOT NULL,
    contact_first_name VARCHAR(100) NOT NULL,
    contact_last_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (store_id) REFERENCES Stores(store_id)
);

CREATE TABLE Locations (
    location_id INT PRIMARY KEY,
    store_id INT,
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL,
    FOREIGN KEY (store_id) REFERENCES Stores(store_id)
);

CREATE TABLE Hours (
    hours_id INT PRIMARY KEY,
    store_id INT,
    hours VARCHAR(255),
    seasonal_hours_days VARCHAR(255),
    seasonal_hours VARCHAR(255),
    FOREIGN KEY (store_id) REFERENCES Stores(store_id)
);

CREATE TABLE Media (
    media_id INT PRIMARY KEY,
    store_id INT,
    main_image_url VARCHAR(255),
    alternate_image_url1 VARCHAR(255),
    alternate_image_url2 VARCHAR(255),
    FOREIGN KEY (store_id) REFERENCES Stores(store_id)
);
