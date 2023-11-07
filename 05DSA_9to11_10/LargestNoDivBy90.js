
	// Javascript program to find largest number
	// divisible by 90 that can be made
	// using 0 and 5
	
	// Function to find largest number
	// divisible by 90 that can be made
	// using 0 and 5
	function printLargestDivisible(n, a)
	{

		// Count of 0s and 5s
		let i, c0 = 0, c5 = 0;
		for (i = 0; i < n; i++)
		{
			if (a[i] == 0)
			{
				c0++;
			}
			else
			{
				c5++;
			}
		}

		// The number of 5s that can be used
		c5 = parseInt(c5 / 9, 10) * 9;

		// The number can't be
		if (c0 == 0)
		{

			// made multiple of 10
			document.write(-1);
		}

		// The only multiple of 90
		else if (c5 == 0)
		{

			// that can be made is 0
			document.write(0 + "</br>");
		}
		else
		{
			for (i = 0; i < c5; i++)
			{
				document.write(5);
			}
			for (i = 0; i < c0; i++)
			{
				document.write(0);
			}
		}
	}
	
	let a = [5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5];
	let n = a.length;
	res=printLargestDivisible(n, a);
    
	

