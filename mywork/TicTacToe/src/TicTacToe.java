import java.util.*;

public class TicTacToe {

    static ArrayList<Integer> playerPositions = new ArrayList<Integer>();
    static ArrayList<Integer> cpuPositions = new ArrayList<Integer>();

    public static void main(String[] args) {

        char[][] board = {{' ','|',' ','|',' '},
                {'-','+','-','+','-'},
                {' ','|',' ','|',' '},
                {'-','+','-','+','-'},
                {' ','|',' ','|',' '}};
        printBoard(board);

        while(true) {
            Scanner sc = new Scanner(System.in);
            System.out.println("enter your placement:");
            int playerPos = sc.nextInt();
            while (playerPositions.contains(playerPos) || cpuPositions.contains(playerPositions)) {
            System.out.println("positions taken , enter correct position");
            playerPos = sc.nextInt();
        }
            placePiece(board, playerPos, "player");

            String response = checkWinner();
            if(response.length()>0){
                System.out.println(response);
                break;
            }

            Random rand = new Random();
            int cpuPos = rand.nextInt(9) + 1;
            while (playerPositions.contains(cpuPos) || cpuPositions.contains(cpuPos)) {
                cpuPos = rand.nextInt(9) + 1;
            }
            placePiece(board, cpuPos, "cpu");
            printBoard(board);
            response = checkWinner();
            if(response.length()>0){
                System.out.println(response);
                break;
            }
            System.out.println(response);
        }
    }

    public static void printBoard(char[][] board){
        for(char[] row: board){
            for(char c: row){
                System.out.print(c);
            }
            System.out.println();
        }
    }

    public static void placePiece(char[][] board, int pos, String user){

        char symbol = ' ';

        if(user.equals("player")){
            symbol = 'X';
            playerPositions.add(pos);
        } else if(user.equals("cpu")){
            symbol = 'O';
            cpuPositions.add(pos);
        }

        switch(pos){
            case 1:
                board[0][0] = symbol;
                break;
            case 2:
                board[0][2] = symbol;
                break;
            case 3:
                board[0][4] = symbol;
                break;
            case 4:
                board[2][0] = symbol;
                break;
            case 5:
                board[2][2] = symbol;
                break;
            case 6:
                board[2][4] = symbol;
                break;
            case 7:
                board[4][0] = symbol;
                break;
            case 8:
                board[4][2] = symbol;
                break;
            case 9:
                board[4][4] = symbol;
                break;
            default:
                break;
        }

    }

    public static String checkWinner(){

        List topRow = Arrays.asList(1,2,3);
        List middleRow = Arrays.asList(4,5,6);
        List bottomRow = Arrays.asList(7,8,9);
        List leftcol = Arrays.asList(1,4,7);
        List midcol = Arrays.asList(2,5,8);
        List rightcol = Arrays.asList(3,6,9);
        List diag1 = Arrays.asList(1,5,9);
        List diag2 = Arrays.asList(3,5,7);

        List<List> win = new ArrayList<List>();
        win.add(topRow);
        win.add(middleRow);
        win.add(bottomRow);
        win.add(leftcol);
        win.add(midcol);
        win.add(rightcol);
        win.add(diag1);
        win.add(diag2);

        for(List l : win){
            if(playerPositions.containsAll(l)){
                return "player wins";
            }else if(cpuPositions.containsAll(l)){
                return "cpu wins";
            }else if(playerPositions.size() + cpuPositions.size() == 9){
                return "draw";
            }
        }
        return "";
    }

}
