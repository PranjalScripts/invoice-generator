const countryList = [
  { value: 'Afghanistan', text: 'Afghanistan' },
  { value: 'Aland Islands', text: 'Aland Islands' },
  { value: 'Albania', text: 'Albania' },
  { value: 'Algeria', text: 'Algeria' },
  { value: 'American Samoa', text: 'American Samoa' },
  { value: 'Andorra', text: 'Andorra' },
  { value: 'Angola', text: 'Angola' },
  { value: 'Anguilla', text: 'Anguilla' },
  { value: 'Antarctica', text: 'Antarctica' },
  { value: 'Antigua and Barbuda', text: 'Antigua and Barbuda' },
  { value: 'Argentina', text: 'Argentina' },
  { value: 'Armenia', text: 'Armenia' },
  { value: 'Aruba', text: 'Aruba' },
  { value: 'Australia', text: 'Australia' },
  { value: 'Austria', text: 'Austria' },
  { value: 'Azerbaijan', text: 'Azerbaijan' },
  { value: 'Bahamas', text: 'Bahamas' },
  { value: 'Bahrain', text: 'Bahrain' },
  { value: 'Bangladesh', text: 'Bangladesh' },
  { value: 'Barbados', text: 'Barbados' },
  { value: 'Belarus', text: 'Belarus' },
  { value: 'Belgium', text: 'Belgium' },
  { value: 'Belize', text: 'Belize' },
  { value: 'Benin', text: 'Benin' },
  { value: 'Bermuda', text: 'Bermuda' },
  { value: 'Bhutan', text: 'Bhutan' },
  { value: 'Bolivia', text: 'Bolivia' },
  { value: 'Bosnia and Herzegovina', text: 'Bosnia and Herzegovina' },
  { value: 'Botswana', text: 'Botswana' },
  {
    value: 'Bonaire, Saint Eustatius and Saba ',
    text: 'Bonaire, Saint Eustatius and Saba ',
  },
  { value: 'Bouvet Island', text: 'Bouvet Island' },
  { value: 'Brazil', text: 'Brazil' },
  { value: 'British Indian Ocean Territory', text: 'British Indian Ocean Territory' },
  { value: 'British Virgin Islands', text: 'British Virgin Islands' },
  { value: 'Brunei', text: 'Brunei' },
  { value: 'Bulgaria', text: 'Bulgaria' },
  { value: 'Burkina Faso', text: 'Burkina Faso' },
  { value: 'Burundi', text: 'Burundi' },
  { value: 'Cambodia', text: 'Cambodia' },
  { value: 'Cameroon', text: 'Cameroon' },
  { value: 'Canada', text: 'Canada' },
  { value: 'Cape Verde', text: 'Cape Verde' },
  { value: 'Cayman Islands', text: 'Cayman Islands' },
  { value: 'Central African Republic', text: 'Central African Republic' },
  { value: 'Chad', text: 'Chad' },
  { value: 'Chile', text: 'Chile' },
  { value: 'China', text: 'China' },
  { value: 'Christmas Island', text: 'Christmas Island' },
  { value: 'Cocos Islands', text: 'Cocos Islands' },
  { value: 'Colombia', text: 'Colombia' },
  { value: 'Comoros', text: 'Comoros' },
  { value: 'Cook Islands', text: 'Cook Islands' },
  { value: 'Costa Rica', text: 'Costa Rica' },
  { value: 'Croatia', text: 'Croatia' },
  { value: 'Cuba', text: 'Cuba' },
  { value: 'Curacao', text: 'Curacao' },
  { value: 'Cyprus', text: 'Cyprus' },
  { value: 'Czech Republic', text: 'Czech Republic' },
  { value: 'Democratic Republic of the Congo', text: 'Democratic Republic of the Congo' },
  { value: 'Denmark', text: 'Denmark' },
  { value: 'Djibouti', text: 'Djibouti' },
  { value: 'Dominica', text: 'Dominica' },
  { value: 'Dominican Republic', text: 'Dominican Republic' },
  { value: 'East Timor', text: 'East Timor' },
  { value: 'Ecuador', text: 'Ecuador' },
  { value: 'Egypt', text: 'Egypt' },
  { value: 'El Salvador', text: 'El Salvador' },
  { value: 'Equatorial Guinea', text: 'Equatorial Guinea' },
  { value: 'Eritrea', text: 'Eritrea' },
  { value: 'Estonia', text: 'Estonia' },
  { value: 'Eswatini', text: 'Eswatini' },
  { value: 'Ethiopia', text: 'Ethiopia' },
  { value: 'Falkland Islands', text: 'Falkland Islands' },
  { value: 'Faroe Islands', text: 'Faroe Islands' },
  { value: 'Fiji', text: 'Fiji' },
  { value: 'Finland', text: 'Finland' },
  { value: 'France', text: 'France' },
  { value: 'French Guiana', text: 'French Guiana' },
  { value: 'French Polynesia', text: 'French Polynesia' },
  { value: 'French Southern Territories', text: 'French Southern Territories' },
  { value: 'Gabon', text: 'Gabon' },
  { value: 'Gambia', text: 'Gambia' },
  { value: 'Georgia', text: 'Georgia' },
  { value: 'Germany', text: 'Germany' },
  { value: 'Ghana', text: 'Ghana' },
  { value: 'Gibraltar', text: 'Gibraltar' },
  { value: 'Greece', text: 'Greece' },
  { value: 'Greenland', text: 'Greenland' },
  { value: 'Grenada', text: 'Grenada' },
  { value: 'Guadeloupe', text: 'Guadeloupe' },
  { value: 'Guam', text: 'Guam' },
  { value: 'Guatemala', text: 'Guatemala' },
  { value: 'Guernsey', text: 'Guernsey' },
  { value: 'Guinea', text: 'Guinea' },
  { value: 'Guinea-Bissau', text: 'Guinea-Bissau' },
  { value: 'Guyana', text: 'Guyana' },
  { value: 'Haiti', text: 'Haiti' },
  { value: 'Heard Island and McDonald Islands', text: 'Heard Island and McDonald Islands' },
  { value: 'Honduras', text: 'Honduras' },
  { value: 'Hong Kong', text: 'Hong Kong' },
  { value: 'Hungary', text: 'Hungary' },
  { value: 'Iceland', text: 'Iceland' },
  { value: 'India', text: 'India' },
  { value: 'Indonesia', text: 'Indonesia' },
  { value: 'Iran', text: 'Iran' },
  { value: 'Iraq', text: 'Iraq' },
  { value: 'Ireland', text: 'Ireland' },
  { value: 'Israel', text: 'Israel' },
  { value: 'Italy', text: 'Italy' },
  { value: 'Ivory Coast', text: 'Ivory Coast' },
  { value: 'Jamaica', text: 'Jamaica' },
  { value: 'Japan', text: 'Japan' },
  { value: 'Jersey', text: 'Jersey' },
  { value: 'Jordan', text: 'Jordan' },
  { value: 'Kazakhstan', text: 'Kazakhstan' },
  { value: 'Kenya', text: 'Kenya' },
  { value: 'Kiribati', text: 'Kiribati' },
  { value: 'Kosovo', text: 'Kosovo' },
  { value: 'Kuwait', text: 'Kuwait' },
  { value: 'Kyrgyzstan', text: 'Kyrgyzstan' },
  { value: 'Laos', text: 'Laos' },
  { value: 'Latvia', text: 'Latvia' },
  { value: 'Lebanon', text: 'Lebanon' },
  { value: 'Lesotho', text: 'Lesotho' },
  { value: 'Liberia', text: 'Liberia' },
  { value: 'Libya', text: 'Libya' },
  { value: 'Liechtenstein', text: 'Liechtenstein' },
  { value: 'Lithuania', text: 'Lithuania' },
  { value: 'Luxembourg', text: 'Luxembourg' },
  { value: 'Macao', text: 'Macao' },
  { value: 'Macedonia', text: 'Macedonia' },
  { value: 'Madagascar', text: 'Madagascar' },
  { value: 'Malawi', text: 'Malawi' },
  { value: 'Malaysia', text: 'Malaysia' },
  { value: 'Maldives', text: 'Maldives' },
  { value: 'Mali', text: 'Mali' },
  { value: 'Malta', text: 'Malta' },
  { value: 'Marshall Islands', text: 'Marshall Islands' },
  { value: 'Martinique', text: 'Martinique' },
  { value: 'Mauritania', text: 'Mauritania' },
  { value: 'Mauritius', text: 'Mauritius' },
  { value: 'Mayotte', text: 'Mayotte' },
  { value: 'Mexico', text: 'Mexico' },
  { value: 'Micronesia', text: 'Micronesia' },
  { value: 'Moldova', text: 'Moldova' },
  { value: 'Monaco', text: 'Monaco' },
  { value: 'Mongolia', text: 'Mongolia' },
  { value: 'Montenegro', text: 'Montenegro' },
  { value: 'Montserrat', text: 'Montserrat' },
  { value: 'Morocco', text: 'Morocco' },
  { value: 'Mozambique', text: 'Mozambique' },
  { value: 'Myanmar', text: 'Myanmar' },
  { value: 'Namibia', text: 'Namibia' },
  { value: 'Nauru', text: 'Nauru' },
  { value: 'Nepal', text: 'Nepal' },
  { value: 'Netherlands', text: 'Netherlands' },
  { value: 'New Caledonia', text: 'New Caledonia' },
  { value: 'New Zealand', text: 'New Zealand' },
  { value: 'Nicaragua', text: 'Nicaragua' },
  { value: 'Niger', text: 'Niger' },
  { value: 'Nigeria', text: 'Nigeria' },
  { value: 'Niue', text: 'Niue' },
  { value: 'Norfolk Island', text: 'Norfolk Island' },
  { value: 'North Korea', text: 'North Korea' },
  { value: 'Northern Mariana Islands', text: 'Northern Mariana Islands' },
  { value: 'Norway', text: 'Norway' },
  { value: 'Oman', text: 'Oman' },
  { value: 'Pakistan', text: 'Pakistan' },
  { value: 'Palau', text: 'Palau' },
  { value: 'Palestinian Territory', text: 'Palestinian Territory' },
  { value: 'Panama', text: 'Panama' },
  { value: 'Papua New Guinea', text: 'Papua New Guinea' },
  { value: 'Paraguay', text: 'Paraguay' },
  { value: 'Peru', text: 'Peru' },
  { value: 'Philippines', text: 'Philippines' },
  { value: 'Pitcairn', text: 'Pitcairn' },
  { value: 'Poland', text: 'Poland' },
  { value: 'Portugal', text: 'Portugal' },
  { value: 'Puerto Rico', text: 'Puerto Rico' },
  { value: 'Qatar', text: 'Qatar' },
  { value: 'Republic of the Congo', text: 'Republic of the Congo' },
  { value: 'Reunion', text: 'Reunion' },
  { value: 'Romania', text: 'Romania' },
  { value: 'Russia', text: 'Russia' },
  { value: 'Rwanda', text: 'Rwanda' },
  { value: 'Saint Barthelemy', text: 'Saint Barthelemy' },
  { value: 'Saint Helena', text: 'Saint Helena' },
  { value: 'Saint Kitts and Nevis', text: 'Saint Kitts and Nevis' },
  { value: 'Saint Lucia', text: 'Saint Lucia' },
  { value: 'Saint Martin', text: 'Saint Martin' },
  { value: 'Saint Pierre and Miquelon', text: 'Saint Pierre and Miquelon' },
  { value: 'Saint Vincent and the Grenadines', text: 'Saint Vincent and the Grenadines' },
  { value: 'Samoa', text: 'Samoa' },
  { value: 'San Marino', text: 'San Marino' },
  { value: 'Sao Tome and Principe', text: 'Sao Tome and Principe' },
  { value: 'Saudi Arabia', text: 'Saudi Arabia' },
  { value: 'Senegal', text: 'Senegal' },
  { value: 'Serbia', text: 'Serbia' },
  { value: 'Seychelles', text: 'Seychelles' },
  { value: 'Sierra Leone', text: 'Sierra Leone' },
  { value: 'Singapore', text: 'Singapore' },
  { value: 'Sint Maarten', text: 'Sint Maarten' },
  { value: 'Slovakia', text: 'Slovakia' },
  { value: 'Slovenia', text: 'Slovenia' },
  { value: 'Solomon Islands', text: 'Solomon Islands' },
  { value: 'Somalia', text: 'Somalia' },
  { value: 'South Africa', text: 'South Africa' },
  {
    value: 'South Georgia and the South Sandwich Islands',
    text: 'South Georgia and the South Sandwich Islands',
  },
  { value: 'South Korea', text: 'South Korea' },
  { value: 'South Sudan', text: 'South Sudan' },
  { value: 'Spain', text: 'Spain' },
  { value: 'Sri Lanka', text: 'Sri Lanka' },
  { value: 'Sudan', text: 'Sudan' },
  { value: 'Suriname', text: 'Suriname' },
  { value: 'Svalbard and Jan Mayen', text: 'Svalbard and Jan Mayen' },
  { value: 'Sweden', text: 'Sweden' },
  { value: 'Switzerland', text: 'Switzerland' },
  { value: 'Syria', text: 'Syria' },
  { value: 'Taiwan', text: 'Taiwan' },
  { value: 'Tajikistan', text: 'Tajikistan' },
  { value: 'Tanzania', text: 'Tanzania' },
  { value: 'Thailand', text: 'Thailand' },
  { value: 'Togo', text: 'Togo' },
  { value: 'Tokelau', text: 'Tokelau' },
  { value: 'Tonga', text: 'Tonga' },
  { value: 'Trinidad and Tobago', text: 'Trinidad and Tobago' },
  { value: 'Tunisia', text: 'Tunisia' },
  { value: 'Turkey', text: 'Turkey' },
  { value: 'Turkmenistan', text: 'Turkmenistan' },
  { value: 'Tuvalu', text: 'Tuvalu' },
  { value: 'Uganda', text: 'Uganda' },
  { value: 'Ukraine', text: 'Ukraine' },
  { value: 'United Arab Emirates', text: 'United Arab Emirates' },
  { value: 'United Kingdom', text: 'United Kingdom' },
  { value: 'United States', text: 'United States' },
  { value: 'Uruguay', text: 'Uruguay' },
  { value: 'Uzbekistan', text: 'Uzbekistan' },
  { value: 'Vanuatu', text: 'Vanuatu' },
  { value: 'Vatican', text: 'Vatican' },
  { value: 'Venezuela', text: 'Venezuela' },
  { value: 'Vietnam', text: 'Vietnam' },
  { value: 'Wallis and Futuna', text: 'Wallis and Futuna' },
  { value: 'Western Sahara', text: 'Western Sahara' },
  { value: 'Yemen', text: 'Yemen' },
  { value: 'Zambia', text: 'Zambia' },
  { value: 'Zimbabwe', text: 'Zimbabwe' },
]

export default countryList
