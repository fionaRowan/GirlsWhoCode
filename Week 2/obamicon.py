#Phoebe Hughes
#Picture color changer
import Myro as M

def main():
    lavender= M.makeColor(164, 131, 196)
    teal= M.makeColor(140, 253, 153)
    cyan= M.makeColor(90, 200, 250)
    pink= M.makeColor(255, 153, 204)

    pic= M.makePicture('phoebe.jpg')
    pixels= M.getPixels(pic)
    for pixel in pixels:
        r= M.getRed(pixel)
        b= M.getBlue(pixel)
        g= M.getGreen(pixel)
        if r<35 and g<35 and b<35:
            M.setColor(pixel, lavender)
        elif r<100 and g<100 and b<100:
            M.setColor(pixel, teal)
        elif g<150 and b<200:
            M.setColor(pixel, pink)
        else:
            M.setColor(pixel, cyan)
    M.show(pic)

if __name__=="__main__":
    main()