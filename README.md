# write a small test suite to test all possible scenarios

In working directory type in the terminal:
	npm install

To start test type in the terminal:
	npm test

Current tests:

	Asserts the total from 10-12-2017 for 20 days is $2.45

	Asserts the total from 01-01-2018 for 1 day is $0.05

	Asserts the total from 01-08-2018 for 1 day is $0.10

	Asserts the total from 01-08-2018 for 1 day is $0.15

	Asserts the total from 01-22-2018 for 1 day is $0.20

	Asserts the total from 01-29-2018 for 1 day is $0.25

	Asserts the total from 01-31-2018 for 1 day is $0.25

	Asserts the total from 01-01-2017 for 365 days is $35.25

	Asserts the total from 10-14-2017 for 1 day (a saturday) is $0.00

	Asserts the total from 10-14-2017 for 1 day (a sunday) is $0.00

	Asserts the total from 10-14-2017 for 2 days (a weekend) is $0.00

	Asserts the return of a 400 when missing the date

	Asserts the return of a 400 when missing the days

	Asserts the return of a 400 when missing the date and days

	Asserts the return of a 400 when the start date is an invalid string

	Asserts the return of a 400 when the days string is an invalid string
