# # backend/lms_plugin/views.py

# from django.views import View
# from django.http import JsonResponse, HttpResponse, HttpResponseBadRequest
# from django.shortcuts import redirect
# from django.utils.decorators import method_decorator
# from django.views.decorators.csrf import csrf_exempt

# # 1) OIDC 로그인 트리거: Canvas가 POST 하므로 CSRF 검사 예외
# @method_decorator(csrf_exempt, name="dispatch")
# class OidcLoginView(View):
#     def post(self, request, *args, **kwargs):
#         params = {
#             'id_token': 'YOUR_ID_TOKEN',
#             'state': request.POST.get('state'),
#         }
#         callback = request.POST.get('target_link_uri')
#         url = f"{callback}?{'&'.join(f'{k}={v}' for k,v in params.items())}"
#         return redirect(url)

# # 2) LTI 런치 트리거: 역시 POST 이므로 CSRF 검사 예외
# @method_decorator(csrf_exempt, name="dispatch")
# class LtiLaunchView(View):
#     def post(self, request, *args, **kwargs):
#         return redirect('/lti/launch/')  # 또는 React 진입점

# # 3) JWKS 조회는 GET 이므로 CSRF와 상관없음
# class JwksView(View):
#     def get(self, request, *args, **kwargs):
#         jwks = {
#             "keys": [
#                 {
#                     "kty": "RSA",
#                     "kid": "my-key-id",
#                     "use": "sig",
#                     "n": "…base64url-modulus…",
#                     "e": "AQAB"
#                 }
#             ]
#         }
#         return JsonResponse(jwks)
