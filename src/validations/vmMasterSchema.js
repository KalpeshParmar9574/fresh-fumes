import * as Yup from 'yup';

const pattern = new RegExp(
	'^(https?:\\/\\/)?' + // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
		'(\\#[-a-z\\d_]*)?$', // fragment locator
	'i'
);

const url = (value) => pattern.test(value);
var regEx = (value) =>  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value);

const vmMasterSchema = Yup.object().shape({
	serverName: Yup.string()
		.required('Server Name is required')
		.max(256, 'Maximum 256 characters required')
		.nullable(),
	assetName: Yup.string()
		.required('Host PC is required')
		.nullable(),
	// status: Yup.string()
	// 	.required('Status is required')
	// 	.nullable(),
	sshPort: Yup.number()
		// .required('SSH port is required')
		.typeError("Port number can only be number")
		.nullable(),
	// vdiFilePath: Yup.string()
	// 	.required('VDI File path is required')
	// 	.nullable(),
	// purpose: Yup.string()
	// 	.required('Purpose is required')
	// 	.nullable(),
	// users: Yup.array()
  //   .of(Yup.mixed())
	// 	.min(1, "Primary user is required")
  //   .nullable(),
	ipAddress: Yup.string()
		.required('IP address is required')
		.test(
				"",
				"Invalid IP address",
				regEx,
			)
			.nullable(),
	diskSize:	Yup.number()
		.required('Disk size is required')
		.typeError("Disk size can only be number")
		.nullable(),
	ramSize:	Yup.number()
		.required('RAM size is required')
		.typeError("RAM size can only be number")
		.nullable(),
	os: Yup.string()
		.required('OS is required')
		.nullable(),
	// mountPoint: Yup.string()
	// 	.required('Mount Point is required')
	// 	.nullable(),
	// webRoot: Yup.string()
	// 	.required('Web root  is required')
	// 	.nullable(),
	// phpVersion: Yup.string()
	// 	.required('PHP version  is required')
	// 	.nullable(),
	// apacheVersion: Yup.string()
	// 	.required('Apache version  is required')
	// 	.nullable(),
	// iisVersion: Yup.string()
	// 	.required('IIS version  is required')
	// 	.nullable(),
	// miscInformation:Yup.string()
	// 	.required('MISC info.  is required')
	// 	.nullable(),
	// deletedPath: Yup.string()
	// 	.required('Deleted path  is required')
	// 	.nullable(),
	// backupDir: Yup.string()
	// 	.required('Backup directory  is required')
	// 	.nullable(),
	// backupServerDetails:Yup.string()
	// 	.required('Backup server detail  is required')
	// 	.nullable(),
	webMinUrl: Yup.string()
	// .required("url req")
		.test(
				"",
				"Invalid URL",
				url,
		)
		.nullable(),
		// .required('URL is required')
		// ,
	// webMinUrl: Yup.string().matches(re,'URL is not valid').nullable(),
	// .required('Please enter website'),
	// webMinUsername: Yup.string()
	// 	.required('Username  is required')
	// 	.nullable(),
	// webMinPassword: Yup.string()
	// 	.required('Password  is required')
	// 	.nullable(),
	// notes: Yup.string()
	// 	.required('Password  is required')
	// 	.nullable(),
	// accessDetails: Yup.array().of(
	// 	Yup.object()
	// 		.shape({
	// 			rootUsername: Yup.string()
	// 				.required("Root username is required.")
	// 				.nullable(),
	// 			password: Yup.string()
	// 				.required("Passworde is required.")
	// 				.nullable(),
	// 		})
	// ),
	// databaseDetails: Yup.array().of(
	// 	Yup.object()
	// 		.shape({
	// 			name: Yup.string()
	// 				.required("Database name is required.")
	// 				.nullable(),
	// 			version: Yup.string()
	// 				.required("Version is required.")
	// 				.nullable(),
	// 			username: Yup.string()
	// 				.required("Username is required.")
	// 				.nullable(),
	// 			password: Yup.string()
	// 				.required("Password is required.")
	// 				.nullable(),
	// 		})
	// ),

});

export default vmMasterSchema;
