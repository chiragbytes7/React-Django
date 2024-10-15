from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response  import Response
from .models import Post
from .serializers import PostSerializer


class PostCreateView(APIView):
    def post(self,request):
        serializer = PostSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'data taken successfully'})
        return Response({'message': 'Some error occured'})
    
# Create your views here.
