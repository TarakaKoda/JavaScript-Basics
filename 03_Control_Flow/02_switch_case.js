let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User')
}

// we can implement the same code with if and else statements
role = 'moderator'

if (role === 'guest') {
    console.log('Guest User');
}
else if (role === 'moderator') {
    console.log('Moderator User');
}
else {
    console.log(' Unknown User')
}