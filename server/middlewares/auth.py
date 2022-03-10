import jwt

def valid_user(request):
    access_token=request.headers.get('Authorization')
    print("valid_user", access_token)
    if access_token==None:
        raise 'No_Token'
    access_token=access_token.split(' ')[1]
    try:
        decoded_data=jwt.decode(access_token,'secret',algorithms="HS256")
    except:
        raise 'Invalid_token'
    print("decoding:",decoded_data)
    return decoded_data