using MyApp.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyApp.Controllers
{
	public class MyAppController : ApiController
	{
		[HttpGet]
		public string TestWSConnection()
		{
			return DateTime.Now.ToString();
		}

		[HttpGet]
		public List<Customer> GetCustomers()
		{
			List < Customer > customers = new List<Customer>();
			Customer c1 = new Customer();
			c1.id = 1;
			c1.firstName = "Joe";
			c1.lastName = "Smith";
			customers.Add(c1);
			Customer c2 = new Customer();
			c2.id = 2;
			c2.firstName = "Leo";
			c2.lastName = "Tabbycat";
			customers.Add(c2);
			Customer c3 = new Customer();
			c3.id = 3;
			c3.firstName = "Audrey";
			c3.lastName = "Blackcat";
			customers.Add(c3);
			return customers;
		}

		[HttpGet]
		public List<Customer> DBGetCustomers()
		{
			List<Customer> customers = new List<Customer>();
			SqlConnection cn = new SqlConnection(@"Server=localhost\SQLEXPRESS;Database=Customers;Trusted_Connection=True;");
			cn.Open();
			SqlCommand cm = new SqlCommand("Select * from Customer",cn);
			SqlDataReader dr = cm.ExecuteReader();
			while (dr.Read())
			{
				Customer c = new Customer();
				c.id = (int)dr["id"];
				c.firstName = (string)dr["firstName"];
				c.lastName = (string)dr["lastName"];
				customers.Add(c);
			}
			return customers;
		}

	}
}