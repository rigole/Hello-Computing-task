
echo "Starting backend server..."
cd backend
node index.js &


cd ../frontend

npm start &

echo "Starting frontend server..."
# Wait for any process to exit
wait

