Need to match concrete and something

A good data model
-- captures all the data the system needs
Abstraction:
-- captures ONLY the data the system needs
-- reflects reality
-- is flexible, can evolve with the system
-- guarantee data integrity without sacrificing performance
-- is driven by the way we access data in the system


Components
-- entities: the nouns, resources in REST terminology
-- properties: information we need to track about the entity
-- relationships: how they relate to each other

How to go from requirements to a data model: workflow
-- Identiy entities
-- Identify properties for each entity
-- Identify relationships between two entities at a time

Ideally you want to get to the 3NF (third normal form).

Entities usually map to tables
Properties usually map to columns
Relationships usually map to a foreign key



Types of relationships
-- one to one <--- extremely rare
-- one to many <--- This is it
-- many to many <--- a trick, smoke and mirrors

Identify relationship by language of the business

Transactional things occur in time

Mantras
-- every table has one and only one primary key (it could be made up of more than one column <- composite keys)
-- one to many relationship, there is a foreign key involved
-- the foreign key goes in the many side always
-- the foreign key is going to point to the primary key in the other table
-- for a many to many we need a third table
-- a many to many table can have extra information about the event
