
chcp 936

set watchifyPath="C:\Users\Administrator\AppData\Roaming\npm\watchify.cmd"

%watchifyPath% -o ./all.bundle.js -v ^
	-r ../dom/addEventListener.js:addEventListener ^


pause
