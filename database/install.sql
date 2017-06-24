create table admin( user_name varchar(100) primary key
	                ,password varchar(50) 
	                ,email varchar(30) );

insert into admin values('nitish', 'my.tiger', 'nitish31jain@gmail.com');

create table user( first_name varchar(100) 
	             , last_name varchar(100) 
	             , user_name varchar(50) primary key
	             , email varchar(50)
	            , password varchar(50) 
	            , security_question varchar(50) 
	            , your_answer varchar(30) );

create table comment_post( user_name varchar(50) 
		, name varchar(100) 
		, email varchar(50) 
		,comment varchar(1000) );

create table citizen_badagaon( id int primary key
			,name varchar(100) not null
			,date_of_birth varchar(30) not null
			,employer varchar(150) DEFAULT 'N/A'
			,designation varchar(50) not null
			,qualification varchar(50) not null
			,house_number int not null
			,ward_number int not null
			,street_name varchar(100) not null
			,city varchar(30) not null
			,district varchar(30) not null
			,state varchar(50) not null
			,country varchar(30) not null
			,zip_code varchar(10) not null
			,phone varchar(20) DEFAULT 'N/A'
			,email varchar(30) DEFAULT 'N/A');

create table star_achiever(	id int primary key
			,name varchar(100) not null
			,date_of_birth varchar(30) not null
			,current_city varchar(50) not null
			,qualification varchar(50) not null
			,designation varchar(50) not null
			,employer varchar(150) not null
			,college varchar(150) not null
			,university varchar(150) not null
		/*	,address_current_city varchar(100) DEFAULT 'N/A'
			,address_badagaon varchar(100) DEFAULT 'N/A'
			,phone varchar(20) DEFAULT 'N/A' */
			,email varchar(30) DEFAULT 'N/A');

create table students_in_education_outside( id int primary key
			,name varchar(100) not null
			,date_of_birth varchar(30) not null
			,current_city varchar(50) not null
			,specialization varchar(50) DEFAULT 'N/A'
			,studying_from  varchar(30) not null
			,qualification varchar(50) not null
			,college_or_school varchar(150) not null
		/*	,university varchar(150) DEFAULT 'N/A'
			,address_current_city varchar(100) DEFAULT 'N/A'
			,address_badagaon varchar(100) DEFAULT 'N/A'
			,phone varchar(20) DEFAULT 'N/A' */
			,email varchar(30) DEFAULT 'N/A');
 
create table students_selected_in_competitive_exam( id int primary key
			,name varchar(100) not null
			,date_of_birth varchar(30) not null 
			,exam_name varchar(100) not null
			,selection_year varchar(30) not null
		/*	,college varchar(150) not null
			,university varchar(150) not null
			,phone varchar(20) DEFAULT 'N/A' */
			,email varchar(30) DEFAULT 'N/A');

