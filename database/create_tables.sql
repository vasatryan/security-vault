-- Creating table "Users"
CREATE TABLE Users (
    UserID SERIAL PRIMARY KEY,
    FirstName VARCHAR(32) NOT NULL,
    LastName VARCHAR(32) NOT NULL,
    Email VARCHAR(512) UNIQUE NOT NULL,
    Password VARCHAR(512) NOT NULL,
    PhoneNumber VARCHAR(16) NOT NULL
);

-- Creating table "Packet"
CREATE TABLE Packet (
    PacketID SERIAL PRIMARY KEY,
    PacketName VARCHAR(255) NOT NULL,
    Price NUMERIC(8, 2) NOT NULL,
    ShortInfo VARCHAR(255) NOT NULL,
    Description TEXT
);

-- Creating table "Purchase_history"
CREATE TABLE Purchase_history (
    PurchaseID SERIAL PRIMARY KEY,
    UserID INT REFERENCES Users(UserID), -- Foreign key referencing Users table
    PacketID INT REFERENCES Packet(PacketID),  -- Foreign key referencing Packet table
    PurchaseDate DATE NOT NULL,
    URL VARCHAR(512) NOT NULL,
    Body TEXT,
    IsUsed BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE OR REPLACE FUNCTION notify_controller()
RETURNS TRIGGER AS $$
BEGIN
    -- Notify the channel with the new PurchaseID
    PERFORM pg_notify('purchase_channel', NEW.PurchaseID::text);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER purchase_insert_trigger
AFTER INSERT ON Purchase_history
FOR EACH ROW
EXECUTE FUNCTION notify_controller();




